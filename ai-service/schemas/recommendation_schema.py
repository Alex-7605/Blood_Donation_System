from pydantic import BaseModel


class DonorRecommendationRequest(BaseModel):
    donorId: str
    name: str
    bloodGroup: str
    age: int
    availability: int
    previous_donations: int
    days_since_last_donation: int
    distance: float


class RecommendationResponse(BaseModel):
    donorId: str
    score: float
    confidence: float