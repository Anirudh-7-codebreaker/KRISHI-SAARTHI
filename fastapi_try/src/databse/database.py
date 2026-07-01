# pyrefly: ignore [missing-import]
from fastapi import Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


DATABASE_URL = "postgresql://postgres:shark#7@localhost:5432/krishi_saarthi"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
    )

def get_db():
    db=SessionLocal()
    try:
        yield db       ##give the value for now  i'll comeback later
    finally:
        db.close()