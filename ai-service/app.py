from fastapi import FastAPI

from routers import health
from routers import recommendations
from routers import prediction
from routers import fraud

from utils.model_loader import model_loader

app = FastAPI(
    title="Blood Donation AI Service",
    version="1.0.0",
    description="Machine Learning Service",
)


@app.on_event("startup")
async def startup():
    model_loader.load_models()


app.include_router(
    health.router,
    prefix="/health",
    tags=["Health"],
)

app.include_router(
    recommendations.router,
    prefix="/recommendations",
    tags=["Recommendations"],
)

app.include_router(
    prediction.router,
    prefix="/prediction",
    tags=["Prediction"],
)

app.include_router(
    fraud.router,
    prefix="/fraud",
    tags=["Fraud"],
)


@app.get("/")
def root():
    return {
        "service": "Blood Donation AI Service",
        "status": "running",
        "models_loaded": True,
    }