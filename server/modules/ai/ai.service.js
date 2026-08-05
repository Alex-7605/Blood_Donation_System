import Donor from "../donors/donor.model.js";
import EmergencyRequest from "../emergencyRequests/emergencyRequest.model.js";

import AIClient from "../../services/aiClient.js";

class AIService {
    async recommendDonors(requestId) {
        const request =
            await EmergencyRequest.findById(
                requestId
            );

        if (!request) {
            throw new Error(
                "Emergency request not found."
            );
        }

        const donors =
            await Donor.find({
                bloodGroup: request.bloodGroup,
                isAvailable: true,
                profileCompleted: true,
            }).populate("user");

        const payload = donors.map(
            (donor) => ({
                donorId: donor._id,
                name: donor.user?.name,
                bloodGroup: donor.bloodGroup,
                age: donor.age,
                availability:
                    donor.isAvailable
                        ? 1
                        : 0,
                previous_donations:
                    donor.totalDonations || 0,
                days_since_last_donation:
                    donor.lastDonationDate
                        ? Math.floor(
                              (Date.now() -
                                  new Date(
                                      donor.lastDonationDate
                                  ).getTime()) /
                                  86400000
                          )
                        : 365,
                distance: donor.distance || 10,
            })
        );

        return await AIClient.recommendDonors(
            payload
        );
    }

    async predictBloodDemand(data) {
        return await AIClient.predictDemand(
            data
        );
    }

    async detectFraud(data) {
        return await AIClient.detectFraud(
            data
        );
    }

    async health() {
        return await AIClient.health();
    }

    async prioritizeEmergency(requestId) {
        return await this.recommendDonors(
            requestId
        );
    }
}

export default new AIService();