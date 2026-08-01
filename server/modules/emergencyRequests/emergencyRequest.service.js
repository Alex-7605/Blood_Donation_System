import ApiError from "../../shared/errors/ApiError.js";

import EmergencyRequestRepository from "./emergencyRequest.repository.js";
import OrganizationRepository from "../organizations/organization.repository.js";

class EmergencyRequestService {
    async createRequest(userId, data) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        return await EmergencyRequestRepository.create({
            organization: organization._id,
            bloodGroup: data.bloodGroup,
            unitsRequired: data.unitsRequired,
            patientName: data.patientName,
            patientAge: data.patientAge,
            hospitalDepartment: data.hospitalDepartment,
            reason: data.reason,
            priority: data.priority,
            requiredBefore: data.requiredBefore,
            remarks: data.remarks,
            createdBy: userId,
        });
    }

    async getOrganizationRequests(userId) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        return await EmergencyRequestRepository.findByOrganization(
            organization._id
        );
    }

    async getOpenRequests() {
        return await EmergencyRequestRepository.findOpenRequests();
    }

    async updateRequest(id, data) {
        const request =
            await EmergencyRequestRepository.findById(id);

        if (!request) {
            throw new ApiError(
                404,
                "Emergency request not found."
            );
        }

        return await EmergencyRequestRepository.update(
            id,
            data
        );
    }

    async fulfillRequest(id, units) {
        const request =
            await EmergencyRequestRepository.findById(id);

        if (!request) {
            throw new ApiError(
                404,
                "Emergency request not found."
            );
        }

        const fulfilled =
            request.unitsFulfilled + units;

        let status = "PARTIALLY_FULFILLED";

        if (fulfilled >= request.unitsRequired) {
            status = "FULFILLED";
        }

        return await EmergencyRequestRepository.update(
            id,
            {
                unitsFulfilled: fulfilled,
                status,
            }
        );
    }

    async cancelRequest(id) {
        const request =
            await EmergencyRequestRepository.findById(id);

        if (!request) {
            throw new ApiError(
                404,
                "Emergency request not found."
            );
        }

        return await EmergencyRequestRepository.update(
            id,
            {
                status: "CANCELLED",
            }
        );
    }

    async getRequest(id) {
        const request =
            await EmergencyRequestRepository.findById(id);

        if (!request) {
            throw new ApiError(
                404,
                "Emergency request not found."
            );
        }

        return request;
    }

    async getAllRequests() {
        return await EmergencyRequestRepository.getAll();
    }

    async deleteRequest(id) {
        const request =
            await EmergencyRequestRepository.findById(id);

        if (!request) {
            throw new ApiError(
                404,
                "Emergency request not found."
            );
        }

        await EmergencyRequestRepository.delete(id);

        return {
            message:
                "Emergency request deleted successfully.",
        };
    }
}

export default new EmergencyRequestService();