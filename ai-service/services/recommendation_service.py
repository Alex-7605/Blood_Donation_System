import pandas as pd

from models.donor_recommendation_model import (
    DonorRecommendationModel,
)


class RecommendationService:
    def __init__(self):
        self.model = DonorRecommendationModel()

        self.model.load(
            "models/donor_recommendation.joblib"
        )

    def recommend(self, donors):
        dataframe = pd.DataFrame(donors)

        predictions = self.model.predict(
            dataframe[
                [
                    "days_since_last_donation",
                    "distance",
                    "age",
                    "previous_donations",
                    "availability",
                ]
            ]
        )

        dataframe["ai_score"] = predictions

        dataframe = dataframe.sort_values(
            "ai_score",
            ascending=False,
        )

        return dataframe.to_dict("records")