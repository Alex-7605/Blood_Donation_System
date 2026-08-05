from models.donor_recommendation_model import (
    DonorRecommendationModel,
)

from models.blood_demand_prediction_model import (
    BloodDemandPredictionModel,
)

from models.fraud_detection_model import (
    FraudDetectionModel,
)

from utils.model_registry import (
    registry,
)


class ModelLoader:
    def __init__(self):
        self.donor_model = DonorRecommendationModel()
        self.blood_model = BloodDemandPredictionModel()
        self.fraud_model = FraudDetectionModel()

    def load_models(self):
        self.donor_model.load(
            "models/donor_recommendation.joblib"
        )

        registry.register(
            "donor_recommendation",
            "1.0.0",
        )

        self.blood_model.load(
            "models/blood_demand_prediction.joblib"
        )

        registry.register(
            "blood_prediction",
            "1.0.0",
        )

        self.fraud_model.load(
            "models/fraud_detection.joblib"
        )

        registry.register(
            "fraud_detection",
            "1.0.0",
        )

        return True


model_loader = ModelLoader()