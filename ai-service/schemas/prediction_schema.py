from pydantic import BaseModel


class BloodDemandRequest(BaseModel):
    month: int
    day_of_week: int
    blood_group: int
    emergency_requests: int
    appointments: int
    donations: int


class BloodDemandResponse(BaseModel):
    predicted_units: float