import EmergencyRequest from "./emergencyRequest.model.js";

class EmergencyRequestRepository {
    async create(data) {
        return await EmergencyRequest.create(data);
    }

    async findById(id) {
        return await EmergencyRequest.findById(id)
            .populate("organization")
            .populate("createdBy");
    }

    async findByOrganization(organizationId) {
        return await EmergencyRequest.find({
            organization: organizationId,
        })
            .populate("createdBy")
            .sort({
                createdAt: -1,
            });
    }

    async findOpenRequests() {
        return await EmergencyRequest.find({
            status: {
                $in: [
                    "OPEN",
                    "PARTIALLY_FULFILLED",
                ],
            },
        })
            .populate("organization")
            .sort({
                priority: -1,
                createdAt: -1,
            });
    }

    async getAll() {
        return await EmergencyRequest.find()
            .populate("organization")
            .populate("createdBy")
            .sort({
                createdAt: -1,
            });
    }

    async update(id, data) {
        return await EmergencyRequest.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true,
            }
        )
            .populate("organization")
            .populate("createdBy");
    }

    async delete(id) {
        return await EmergencyRequest.findByIdAndDelete(id);
    }
}

export default new EmergencyRequestRepository();