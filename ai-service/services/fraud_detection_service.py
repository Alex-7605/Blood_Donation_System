import pandas as pd

from models.fraud_detection_model import (
    FraudDetectionModel,
)


class FraudDetectionService:
    def __init__(self):
        self.model = FraudDetectionModel()

        self.model.load(
            "models/fraud_detection.joblib"
        )

    def analyze(self, record):
        dataframe = pd.DataFrame([record])

        features = dataframe[
            [
                "donations_last_365_days",
                "days_since_last_donation",
                "distance",
                "appointments_cancelled",
                "missed_appointments",
            ]
        ]

        prediction = self.model.predict(features)[0]

        score = self.model.decision_score(features)[0]

        return {
            "fraud": prediction == -1,
            "confidence": float(abs(score)),
            "raw_prediction": int(prediction),
        }