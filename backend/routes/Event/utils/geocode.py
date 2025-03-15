import aiohttp
import os
from typing import Tuple

async def get_coordinates(city_name: str) -> Tuple[float, float]:
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("Google API key not configured")

    url = "https://maps.googleapis.com/maps/api/geocode/json"
    params = {"address": city_name, "key": api_key}

    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url, params=params) as response:
                response.raise_for_status()
                data = await response.json()

                if data.get("status") != "OK":
                    error_msg = data.get("error_message", "Unknown error")
                    raise ValueError(f"API Error: {data['status']} - {error_msg}")

                location = data["results"][0]["geometry"]["location"]
                return location["lat"], location["lng"]

    except aiohttp.ClientError as e:
        raise ValueError(f"Network error: {str(e)}")