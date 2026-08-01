import Donation from "./donation.model.js";

class DonationRepository {
    async create(data) {
        return await Donation.create(data);
    }

    async findById(id) {
        return await Donation.findById(id)
            .populate("donor")
            .populate("organization")
            .populate("appointment")
            .populate("recordedBy");
    }

    async findByAppointment(appointmentId) {
        return await Donation.findOne({
            appointment: appointmentId,
        });
    }

    async findByDonor(donorId) {
        return await Donation.find({
            donor: donorId,
        })
            .populate("organization")
            .sort({
                donationDate: -1,
            });
    }

    async findByOrganization(organizationId) {
        return await Donation.find({
            organization: organizationId,
        })
            .populate("donor")
            .sort({
                donationDate: -1,
            });
    }

    async getAll() {
        return await Donation.find()
            .populate("donor")
            .populate("organization")
            .populate("appointment")
            .sort({
                donationDate: -1,
            });
    }

    async update(id, data) {
        return await Donation.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true,
            }
        );
    }

    async delete(id) {
        return await Donation.findByIdAndDelete(id);
    }
}

export default new DonationRepository();