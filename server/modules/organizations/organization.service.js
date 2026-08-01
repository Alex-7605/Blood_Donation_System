import ApiError from "../../shared/errors/ApiError.js";
import OrganizationRepository from "./organization.repository.js";

class OrganizationService {
    async createProfile(userId, data) {
        const existingProfile =
            await OrganizationRepository.findByUserId(userId);

        if (existingProfile) {
            throw new ApiError(
                409,
                "Organization profile already exists."
            );
        }

        const existingRegistration =
            await OrganizationRepository.findByRegistrationNumber(
                data.registrationNumber
            );

        if (existingRegistration) {
            throw new ApiError(
                409,
                "Registration number already exists."
            );
        }

        const organization =
            await OrganizationRepository.create({
                user: userId,
                ...data,
                profileCompleted: true,
            });

        return organization;
    }

    async getProfile(userId) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        return organization;
    }

    async updateProfile(userId, data) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        return await OrganizationRepository.update(
            organization._id,
            data
        );
    }

    async deleteProfile(userId) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        await OrganizationRepository.delete(
            organization._id
        );

        return {
            message:
                "Organization profile deleted successfully.",
        };
    }

    async getAllOrganizations() {
        return await OrganizationRepository.getAll();
    }

    async getOrganizationById(id) {
        const organization =
            await OrganizationRepository.findById(id);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization not found."
            );
        }

        return organization;
    }
}

export default new OrganizationService();