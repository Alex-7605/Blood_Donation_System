from datetime import datetime


class ModelMetadata:
    def __init__(
        self,
        name: str,
        version: str,
    ):
        self.name = name
        self.version = version
        self.loaded_at = datetime.utcnow()

    def to_dict(self):
        return {
            "name": self.name,
            "version": self.version,
            "loaded_at": self.loaded_at.isoformat(),
        }