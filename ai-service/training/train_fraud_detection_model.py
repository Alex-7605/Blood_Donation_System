import os

import pandas as pd

from models.fraud_detection_model import (
    FraudDetectionModel,
)

DATASET = "datasets/fraud_training.csv"

MODEL_PATH = "models/fraud_detection.joblib"


def main():
    dataframe = pd.read_csv(DATASET)

    model = FraudDetectionModel()

    model.train(dataframe)

    os.makedirs("models", exist_ok=True)

    model.save(MODEL_PATH)

    print("Fraud Detection Model trained successfully.")
    print(f"Saved to: {MODEL_PATH}")


if __name__ == "__main__":
    main()
