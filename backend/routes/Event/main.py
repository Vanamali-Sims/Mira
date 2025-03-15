from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List, Literal, Annotated
import requests
import os
import logging
from dotenv import load_dotenv
from utils.geocode import get_coordinates
from fastapi import Depends

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Mental Health Support Services Locator",
    description="API service for locating mental health related venues"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

# Logging configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ---------- Data Models ----------
class ErrorResponse(BaseModel):
    detail: str = Field(..., example="Invalid location format")

class EventResponse(BaseModel):
    name: str = Field(..., example="Mindful Wellness Center")
    address: str = Field(..., example="123 Main St, Melbourne")
    types: List[str] = Field(..., example=["health", "mental_health"])
    google_map_link: str 
    lat: float = Field(..., example=-37.8136)
    lng: float = Field(..., example=144.9631)
    rating: Optional[float] = Field(None, example=4.5)

class MentalHealthQueryParams:
    def __init__(
        self,
        location: Annotated[str, Query(
            example="-37.8136,144.9631",
            description="Coordinate format: latitude,longitude or city name (default: Melbourne)")] = None,
        radius: Annotated[int, Query(
            ge=500, le=50000, 
            description="Search radius in meters")] = 5000,
        activity_type: Annotated[Optional[str], Query(
            enum=["support_group", "therapy", "meditation", 
                 "yoga", "community_center", "social_work"],
            description="Filter by service type")] = None,
        limit: Annotated[int, Query(
            ge=1, le=50, 
            description="Maximum results per category")] = 10
    ):
        self.location = location or "-37.8136,144.9631"
        self.radius = radius
        self.activity_type = activity_type
        self.limit = limit

# ---------- Core Logic ----------
TYPE_MAPPING = {
    "support_group": "mental_health_service",  # More accurate type
    "therapy": "psychologist",
    "meditation": "meditation_center",
    "yoga": "yoga_studio",
    "community_center": "community_center",
    "social_work": "social_services"
}

@app.get("/api/events", 
        response_model=List[EventResponse],
        responses={400: {"model": ErrorResponse}, 500: {"model": ErrorResponse}})
async def get_mental_health_services(params: MentalHealthQueryParams = Depends()):
    """
    Core logic for retrieving mental health support services
    """
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        logger.error("Google API key not configured")
        raise HTTPException(500, detail="Server configuration error")
    
    # Geocoding processing
    try:
        if ',' in params.location:
            lat, lng = map(float, params.location.split(','))
            if not (-90 <= lat <= 90) or not (-180 <= lng <= 180):
                raise ValueError("Invalid coordinate range")
        else:
            lat, lng = await get_coordinates(params.location)
    except Exception as e:
        logger.warning(f"Location parsing failed: {params.location} - {str(e)}")
        raise HTTPException(400, detail=f"Invalid location: {str(e)}")

    # Venue type filtering
    selected_types = [TYPE_MAPPING[params.activity_type]] if params.activity_type else TYPE_MAPPING.values()

    # Google Places API requests
    events = []
    for place_type in selected_types:
        api_params = {
            "location": f"{lat},{lng}",
            "radius": params.radius,
            "type": place_type,
            "key": api_key
        }
        try:
            response = requests.get(
                "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
                params=api_params
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status") == "OK":
                for place in data["results"][:params.limit]:
                    events.append(format_place_result(place))
                    
        except requests.RequestException as e:
            logger.error(f"API request failed: {place_type} - {str(e)}")
    
    return sorted(events, key=lambda x: x.rating or 0, reverse=True)

def format_place_result(place: dict) -> EventResponse:
    """Format Google Places API response"""
    return EventResponse(
        name=place.get("name", "Unnamed Venue"),
        address=place.get("vicinity", "Address not provided"),
        types=place.get("types", []),
        google_map_link=f"https://www.google.com/maps/place/?q=place_id:{place['place_id']}",
        lat=place["geometry"]["location"]["lat"],
        lng=place["geometry"]["location"]["lng"],
        rating=place.get("rating")
    )

#uvicorn main:app --reload
##http://localhost:8000/api/events
###http://localhost:8000/api/events?location=34.7472,113.6249