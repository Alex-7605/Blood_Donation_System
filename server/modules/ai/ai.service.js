import Donor from "../donors/donor.model.js";
import EmergencyRequest from "../emergencyRequests/emergencyRequest.model.js";

import MLService from "./ml.service.js";

class AIService {
    async recommendDonors(requestId) {
        const request =
            await EmergencyRequest.findById(requestId);

        if (!request) {
            throw new Error(
                "Emergency request not found."
            );
        }

        const donors = await Donor.find({
            bloodGroup: request.bloodGroup,
            isAvailable: true,
            profileCompleted: true,
        }).populate("user");

        return await MLService.recommendDonors(
            request,
            donors
        );
    }

    async predictBloodDemand() {
        return await MLService.predictDemand();
    }

    async detectFraud(record) {
        return await MLService.detectFraud(record);
    }

    async prioritizeEmergency(requestId) {
        return await this.recommendDonors(requestId);
    }

    async health() {
        return await MLService.health();
    }
}

export default new AIService();