import pandas as pd

from models.blood_demand_prediction_model import (
    BloodDemandPredictionModel,
)


class PredictionService:
    def __init__(self):
        self.model = BloodDemandPredictionModel()

        self.model.load(
            "models/blood_demand_prediction.joblib"
        )

    def predict(self, request):
        dataframe = pd.DataFrame([request])

        prediction = self.model.predict(
            dataframe[
                [
                    "month",
                    "day_of_week",
                    "blood_group",
                    "emergency_requests",
                    "appointments",
                    "donations",
                ]
            ]
        )

        return {
            "predicted_units": float(prediction[0])
        }