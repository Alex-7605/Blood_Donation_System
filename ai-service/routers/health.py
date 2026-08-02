from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def health():
    return {
        "status": "healthy",
        "model_loaded": False,
        "service": "AI Service",
    }