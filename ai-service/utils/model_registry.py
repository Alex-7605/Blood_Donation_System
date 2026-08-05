from utils.model_metadata import (
    ModelMetadata,
)


class ModelRegistry:
    def __init__(self):
        self.models = {}

    def register(
        self,
        name,
        version,
    ):
        self.models[name] = ModelMetadata(
            name,
            version,
        )

    def get_models(self):
        return {
            key: value.to_dict()
            for key, value in self.models.items()
        }


registry = ModelRegistry()