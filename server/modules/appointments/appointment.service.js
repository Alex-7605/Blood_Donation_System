import ApiError from "../../shared/errors/ApiError.js";

import AppointmentRepository from "./appointment.repository.js";
import DonorRepository from "../donors/donor.repository.js";
import OrganizationRepository from "../organizations/organization.repository.js";

class AppointmentService {
    async createAppointment(userId, data) {
        const donor = await DonorRepository.findByUserId(userId);

        if (!donor) {
            throw new ApiError(404, "Donor profile not found.");
        }

        const organization =
            await OrganizationRepository.findById(
                data.organization
            );

        if (!organization) {
            throw new ApiError(404, "Organization not found.");
        }

        return await AppointmentRepository.create({
            donor: donor._id,
            organization: organization._id,
            appointmentDate: data.appointmentDate,
            appointmentTime: data.appointmentTime,
            bloodGroup: donor.bloodGroup,
            purpose: data.purpose,
            remarks: data.remarks,
        });
    }

    async getMyAppointments(userId) {
        const donor = await DonorRepository.findByUserId(userId);

        if (!donor) {
            throw new ApiError(404, "Donor profile not found.");
        }

        return await AppointmentRepository.findByDonor(
            donor._id
        );
    }

    async getOrganizationAppointments(userId) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        return await AppointmentRepository.findByOrganization(
            organization._id
        );
    }

    async updateAppointmentStatus(
        appointmentId,
        status,
        approvedBy
    ) {
        const appointment =
            await AppointmentRepository.findById(
                appointmentId
            );

        if (!appointment) {
            throw new ApiError(
                404,
                "Appointment not found."
            );
        }

        const updateData = {
            status,
            approvedBy,
        };

        if (status === "COMPLETED") {
            updateData.completedAt = new Date();
        }

        return await AppointmentRepository.update(
            appointmentId,
            updateData
        );
    }

    async cancelAppointment(appointmentId) {
        const appointment =
            await AppointmentRepository.findById(
                appointmentId
            );

        if (!appointment) {
            throw new ApiError(
                404,
                "Appointment not found."
            );
        }

        return await AppointmentRepository.update(
            appointmentId,
            {
                status: "CANCELLED",
            }
        );
    }

    async getAppointmentById(id) {
        const appointment =
            await AppointmentRepository.findById(id);

        if (!appointment) {
            throw new ApiError(
                404,
                "Appointment not found."
            );
        }

        return appointment;
    }

    async getAllAppointments() {
        return await AppointmentRepository.getAll();
    }
}

export default new AppointmentService();