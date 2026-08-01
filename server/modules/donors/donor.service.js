import ApiError from "../../shared/errors/ApiError.js";
import DonorRepository from "./donor.repository.js";

class DonorService {
    async createProfile(userId, data) {
        const existingProfile = await DonorRepository.findByUserId(userId);

        if (existingProfile) {
            throw new ApiError(409, "Donor profile already exists.");
        }

        const donor = await DonorRepository.create({
            user: userId,
            ...data,
            profileCompleted: true,
        });

        return donor;
    }

    async getProfile(userId) {
        const donor = await DonorRepository.findByUserId(userId);

        if (!donor) {
            throw new ApiError(404, "Donor profile not found.");
        }

        return donor;
    }

    async updateProfile(userId, data) {
        const donor = await DonorRepository.findByUserId(userId);

        if (!donor) {
            throw new ApiError(404, "Donor profile not found.");
        }

        return await DonorRepository.update(donor._id, data);
    }

    async deleteProfile(userId) {
        const donor = await DonorRepository.findByUserId(userId);

        if (!donor) {
            throw new ApiError(404, "Donor profile not found.");
        }

        await DonorRepository.delete(donor._id);

        return {
            message: "Donor profile deleted successfully.",
        };
    }

    async getAllDonors() {
        return await DonorRepository.getAll();
    }

    async getDonorById(id) {
        const donor = await DonorRepository.findById(id);

        if (!donor) {
            throw new ApiError(404, "Donor not found.");
        }

        return donor;
    }
}

export default new DonorService();