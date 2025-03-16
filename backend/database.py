from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import DateTime
from datetime import datetime

DATABASE_URL = "sqlite:///./test.db"  # Use SQLite database

# Create database engine and session
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Event model
class Event(Base):
    __tablename__ = "events"
    id = Column(Integer, primary_key=True, index=True)
    event_name = Column(String, index=True)
    organized_by = Column(String)
    date = Column(DateTime, default=datetime.utcnow)
    location = Column(String)
    time = Column(String)
    allowed_gender = Column(String)

# Initialize the database
def init_db():
    Base.metadata.create_all(bind=engine)
