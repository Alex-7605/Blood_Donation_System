import Appointment from "./appointment.model.js";

class AppointmentRepository {
    async create(data) {
        return await Appointment.create(data);
    }

    async findById(id) {
        return await Appointment.findById(id)
            .populate("donor")
            .populate("organization")
            .populate("approvedBy");
    }

    async findByDonor(donorId) {
        return await Appointment.find({
            donor: donorId,
        })
            .populate("organization")
            .sort({
                appointmentDate: -1,
            });
    }

    async findByOrganization(organizationId) {
        return await Appointment.find({
            organization: organizationId,
        })
            .populate("donor")
            .sort({
                appointmentDate: -1,
            });
    }

    async getAll() {
        return await Appointment.find()
            .populate("donor")
            .populate("organization")
            .populate("approvedBy")
            .sort({
                appointmentDate: -1,
            });
    }

    async update(id, data) {
        return await Appointment.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true,
            }
        )
            .populate("donor")
            .populate("organization")
            .populate("approvedBy");
    }

    async delete(id) {
        return await Appointment.findByIdAndDelete(id);
    }
}

export default new AppointmentRepository();