import os

import pandas as pd

from models.blood_demand_prediction_model import (
    BloodDemandPredictionModel,
)

DATASET = "datasets/blood_demand_training.csv"

MODEL_PATH = "models/blood_demand_prediction.joblib"


def main():
    dataframe = pd.read_csv(DATASET)

    model = BloodDemandPredictionModel()

    model.train(dataframe)

    os.makedirs("models", exist_ok=True)

    model.save(MODEL_PATH)

    print("Blood demand model trained successfully.")
    print(f"Saved to: {MODEL_PATH}")


if __name__ == "__main__":
    main()