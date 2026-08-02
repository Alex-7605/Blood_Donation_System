import joblib
import pandas as pd
from sklearn.ensemble import RandomForestRegressor


class BloodDemandPredictionModel:
    def __init__(self):
        self.model = RandomForestRegressor(
            n_estimators=300,
            random_state=42,
        )

    def train(self, dataframe: pd.DataFrame):
        features = dataframe[
            [
                "month",
                "day_of_week",
                "blood_group",
                "emergency_requests",
                "appointments",
                "donations",
            ]
        ]

        target = dataframe["units_required"]

        self.model.fit(features, target)

    def predict(self, dataframe: pd.DataFrame):
        return self.model.predict(dataframe)

    def save(self, path: str):
        joblib.dump(self.model, path)

    def load(self, path: str):
        self.model = joblib.load(path)