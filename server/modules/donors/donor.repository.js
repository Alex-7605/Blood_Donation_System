import Donor from "./donor.model.js";

class DonorRepository {
    async create(data) {
        return await Donor.create(data);
    }

    async findById(id) {
        return await Donor.findById(id).populate("user");
    }

    async findByUserId(userId) {
        return await Donor.findOne({
            user: userId,
        }).populate("user");
    }

    async update(id, data) {
        return await Donor.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        }).populate("user");
    }

    async delete(id) {
        return await Donor.findByIdAndDelete(id);
    }

    async getAll() {
        return await Donor.find().populate("user");
    }
}

export default new DonorRepository();