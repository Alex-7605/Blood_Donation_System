import Organization from "./organization.model.js";

class OrganizationRepository {
    async create(data) {
        return await Organization.create(data);
    }

    async findById(id) {
        return await Organization.findById(id).populate("user");
    }

    async findByUserId(userId) {
        return await Organization.findOne({
            user: userId,
        }).populate("user");
    }

    async findByRegistrationNumber(registrationNumber) {
        return await Organization.findOne({
            registrationNumber,
        });
    }

    async getAll() {
        return await Organization.find().populate("user");
    }

    async update(id, data) {
        return await Organization.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true,
            }
        ).populate("user");
    }

    async delete(id) {
        return await Organization.findByIdAndDelete(id);
    }
}

export default new OrganizationRepository();