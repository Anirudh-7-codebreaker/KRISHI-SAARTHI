# pyrefly: ignore [missing-import]
from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from .schemas import UserCreate,UserResponse
from typing import List
from src.databse.database import get_db
from . import controller



router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/",response_model=List[UserResponse])
def get_users(db:Session=Depends(get_db)):
    return controller.get_users(db)



@router.post("/",response_model=UserResponse)
def create_user(
    user:UserCreate,
    db:Session=Depends(get_db)
):
    return controller.create_user(db,user)




