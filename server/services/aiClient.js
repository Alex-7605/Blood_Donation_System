import axios from "axios";

class AIClient {
    constructor() {
        this.client = axios.create({
            baseURL:
                process.env.AI_SERVICE_URL ||
                "http://localhost:8000",
            timeout: 15000,
        });
    }

    async health() {
        const response =
            await this.client.get("/health");

        return response.data;
    }

    async recommendDonors(data) {
        const response =
            await this.client.post(
                "/recommendations",
                data
            );

        return response.data;
    }

    async predictDemand(data) {
        const response =
            await this.client.post(
                "/prediction",
                data
            );

        return response.data;
    }

    async detectFraud(data) {
        const response =
            await this.client.post(
                "/fraud",
                data
            );

        return response.data;
    }
}

export default new AIClient();