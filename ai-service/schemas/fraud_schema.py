from pydantic import BaseModel


class FraudRequest(BaseModel):
    donations_last_365_days: int
    days_since_last_donation: int
    distance: float
    appointments_cancelled: int
    missed_appointments: int


class FraudResponse(BaseModel):
    fraud: bool
    confidence: float
    raw_prediction: int