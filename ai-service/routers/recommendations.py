from fastapi import APIRouter

from services.recommendation_service import (
    RecommendationService,
)

router = APIRouter()

service = RecommendationService()


@router.post("/")
def recommend(data: list[dict]):
    recommendations = service.recommend(data)

    return {
        "success": True,
        "total": len(recommendations),
        "recommendations": recommendations,
    }