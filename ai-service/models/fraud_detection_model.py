import joblib
import pandas as pd
from sklearn.ensemble import IsolationForest


class FraudDetectionModel:
    def __init__(self):
        self.model = IsolationForest(
            contamination=0.05,
            random_state=42,
            n_estimators=200,
        )

    def train(self, dataframe: pd.DataFrame):
        features = dataframe[
            [
                "donations_last_365_days",
                "days_since_last_donation",
                "distance",
                "appointments_cancelled",
                "missed_appointments",
            ]
        ]

        self.model.fit(features)

    def predict(self, dataframe: pd.DataFrame):
        return self.model.predict(dataframe)

    def decision_score(self, dataframe: pd.DataFrame):
        return self.model.decision_function(dataframe)

    def save(self, path: str):
        joblib.dump(self.model, path)

    def load(self, path: str):
        self.model = joblib.load(path)