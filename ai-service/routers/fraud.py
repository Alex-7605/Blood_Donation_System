from fastapi import APIRouter

from services.fraud_detection_service import (
    FraudDetectionService,
)

router = APIRouter()

service = FraudDetectionService()


@router.post("/")
def detect(record: dict):
    result = service.analyze(record)

    return {
        "success": True,
        "analysis": result,
    }