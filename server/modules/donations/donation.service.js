import ApiError from "../../shared/errors/ApiError.js";

import DonationRepository from "./donation.repository.js";
import AppointmentRepository from "../appointments/appointment.repository.js";
import InventoryRepository from "../inventory/inventory.repository.js";
import DonorRepository from "../donors/donor.repository.js";

class DonationService {
    async recordDonation(userId, data) {
        const appointment =
            await AppointmentRepository.findById(data.appointment);

        if (!appointment) {
            throw new ApiError(404, "Appointment not found.");
        }

        if (appointment.status !== "COMPLETED") {
            throw new ApiError(
                400,
                "Only completed appointments can be recorded as donations."
            );
        }

        const existingDonation =
            await DonationRepository.findByAppointment(
                appointment._id
            );

        if (existingDonation) {
            throw new ApiError(
                409,
                "Donation has already been recorded."
            );
        }

        const donation = await DonationRepository.create({
            donor: appointment.donor._id,
            organization: appointment.organization._id,
            appointment: appointment._id,
            bloodGroup: appointment.bloodGroup,
            quantity: data.quantity,
            donationType: data.donationType,
            hemoglobin: data.hemoglobin,
            bloodPressure: data.bloodPressure,
            pulseRate: data.pulseRate,
            weight: data.weight,
            remarks: data.remarks,
            recordedBy: userId,
        });

        const inventory =
            await InventoryRepository.findByOrganizationAndBloodGroup(
                appointment.organization._id,
                appointment.bloodGroup
            );

        if (inventory) {
            await InventoryRepository.update(inventory._id, {
                availableUnits:
                    inventory.availableUnits + donation.quantity,
                lastUpdatedBy: userId,
            });
        }

        await DonorRepository.update(appointment.donor._id, {
            lastDonationDate: donation.donationDate,
        });

        return donation;
    }

    async getDonation(id) {
        const donation =
            await DonationRepository.findById(id);

        if (!donation) {
            throw new ApiError(
                404,
                "Donation not found."
            );
        }

        return donation;
    }

    async getDonorHistory(donorId) {
        return await DonationRepository.findByDonor(
            donorId
        );
    }

    async getOrganizationHistory(organizationId) {
        return await DonationRepository.findByOrganization(
            organizationId
        );
    }

    async getAllDonations() {
        return await DonationRepository.getAll();
    }

    async deleteDonation(id) {
        const donation =
            await DonationRepository.findById(id);

        if (!donation) {
            throw new ApiError(
                404,
                "Donation not found."
            );
        }

        await DonationRepository.delete(id);

        return {
            message:
                "Donation deleted successfully.",
        };
    }
}

export default new DonationService();