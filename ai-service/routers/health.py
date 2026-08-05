from fastapi import APIRouter

from utils.model_registry import (
    registry,
)

router = APIRouter()


@router.get("/")
def health():
    return {
        "status": "healthy",
        "models": registry.get_models(),
    }