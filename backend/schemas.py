from pydantic import BaseModel
from datetime import datetime

class EventCreate(BaseModel):
    event_name: str
    organized_by: str
    date: datetime
    location: str
    time: str
    allowed_gender: str

    class Config:
        from_attributes = True  # Use 'from_attributes' instead of 'orm_mode'

class EventResponse(EventCreate):
    id: int

    class Config:
        from_attributes = True  # Use 'from_attributes' instead of 'orm_mode'
