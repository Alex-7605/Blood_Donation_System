import subprocess

TRAINERS = [
    "training/train_donor_model.py",
    "training/train_blood_demand_model.py",
    "training/train_fraud_detection_model.py",
]


def main():
    for trainer in TRAINERS:
        print(f"Running {trainer}")

        subprocess.run(
            [
                "python",
                trainer,
            ],
            check=True,
        )

    print()
    print("All AI models trained successfully.")


if __name__ == "__main__":
    main()