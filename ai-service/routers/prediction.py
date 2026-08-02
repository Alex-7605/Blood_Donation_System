from fastapi import APIRouter

from services.prediction_service import (
    PredictionService,
)

router = APIRouter()

service = PredictionService()


@router.post("/")
def predict(request: dict):
    prediction = service.predict(request)

    return {
        "success": True,
        "prediction": prediction,
    }