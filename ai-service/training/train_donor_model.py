import os

import pandas as pd

from models.donor_recommendation_model import (
    DonorRecommendationModel,
)

DATASET = "datasets/donor_training.csv"

MODEL_PATH = "models/donor_recommendation.joblib"


def main():
    dataframe = pd.read_csv(DATASET)

    model = DonorRecommendationModel()

    model.train(dataframe)

    os.makedirs("models", exist_ok=True)

    model.save(MODEL_PATH)

    print("Model trained successfully.")
    print(f"Saved to: {MODEL_PATH}")


if __name__ == "__main__":
    main()