# pyrefly: ignore [missing-import]
from fastapi import APIRouter
from dtos import ProductDto

router= APIRouter(prefix="/chat",tags=["chat"])

@router.post("/",response_model=ProductDto)
def chat(data:ProductDto):
    return {
        "message": data.message
    }

    return "error in post"

