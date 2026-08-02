import joblib
import pandas as pd
from sklearn.ensemble import RandomForestRegressor


class DonorRecommendationModel:
    def __init__(self):
        self.model = RandomForestRegressor(
            n_estimators=200,
            random_state=42,
        )

    def train(self, dataframe: pd.DataFrame):
        features = dataframe[
            [
                "days_since_last_donation",
                "distance",
                "age",
                "previous_donations",
                "availability",
            ]
        ]

        target = dataframe["score"]

        self.model.fit(features, target)

    def predict(self, dataframe: pd.DataFrame):
        return self.model.predict(dataframe)

    def save(self, path: str):
        joblib.dump(self.model, path)

    def load(self, path: str):
        self.model = joblib.load(path)