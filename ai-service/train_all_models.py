import subprocess
import sys

TRAINERS = [
    "training.train_donor_model",
    "training.train_blood_demand_model",
    "training.train_fraud_detection_model",
]


def main():
    for trainer in TRAINERS:
        print(f"Running {trainer}")

        subprocess.run(
            [
                sys.executable,
                "-m",
                trainer,
            ],
            check=True,
        )

    print()
    print("All AI models trained successfully.")


if __name__ == "__main__":
    main()