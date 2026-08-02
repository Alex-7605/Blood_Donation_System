import fs from "fs/promises";
import path from "path";

class MLService {
    constructor() {
        this.modelLoaded = false;
        this.modelVersion = "1.0.0";
    }

    async initialize() {
        this.modelLoaded = true;

        return {
            loaded: true,
            version: this.modelVersion,
        };
    }

    async recommendDonors(request, donors) {
        const rankedDonors = donors
            .map((donor) => {
                let score = 0;

                if (
                    donor.bloodGroup === request.bloodGroup
                ) {
                    score += 50;
                }

                if (donor.isAvailable) {
                    score += 25;
                }

                if (donor.profileCompleted) {
                    score += 10;
                }

                if (donor.lastDonationDate) {
                    const days =
                        Math.floor(
                            (Date.now() -
                                new Date(
                                    donor.lastDonationDate
                                ).getTime()) /
                                86400000
                        );

                    if (days >= 90) {
                        score += Math.min(days / 10, 15);
                    }
                } else {
                    score += 15;
                }

                return {
                    donor,
                    score,
                    confidence:
                        Math.min(score, 100) / 100,
                };
            })
            .sort((a, b) => b.score - a.score);

        return rankedDonors;
    }

    async predictDemand() {
        return {
            model: "Demand Predictor",
            version: this.modelVersion,
            prediction: {
                "A+": 0,
                "A-": 0,
                "B+": 0,
                "B-": 0,
                "AB+": 0,
                "AB-": 0,
                "O+": 0,
                "O-": 0,
            },
        };
    }

    async detectFraud(record) {
        return {
            suspicious: false,
            confidence: 0,
            reasons: [],
            record,
        };
    }

    async health() {
        return {
            modelLoaded: this.modelLoaded,
            version: this.modelVersion,
            timestamp: new Date(),
        };
    }

    async savePrediction(prediction) {
        const directory = path.join(
            process.cwd(),
            "storage",
            "predictions"
        );

        await fs.mkdir(directory, {
            recursive: true,
        });

        const file = path.join(
            directory,
            `${Date.now()}.json`
        );

        await fs.writeFile(
            file,
            JSON.stringify(prediction, null, 4)
        );

        return file;
    }
}

export default new MLService();