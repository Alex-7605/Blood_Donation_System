import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donor",
            required: true,
            index: true,
        },

        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            index: true,
        },

        appointmentDate: {
            type: Date,
            required: true,
        },

        appointmentTime: {
            type: String,
            required: true,
        },

        bloodGroup: {
            type: String,
            required: true,
        },

        purpose: {
            type: String,
            enum: [
                "DONATION",
                "EMERGENCY_DONATION",
            ],
            default: "DONATION",
        },

        status: {
            type: String,
            enum: [
                "PENDING",
                "APPROVED",
                "REJECTED",
                "CANCELLED",
                "COMPLETED",
                "NO_SHOW",
            ],
            default: "PENDING",
        },

        remarks: {
            type: String,
            default: "",
        },

        approvedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        completedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

appointmentSchema.index({
    donor: 1,
    appointmentDate: 1,
});

appointmentSchema.index({
    organization: 1,
    appointmentDate: 1,
});

const Appointment = mongoose.model(
    "Appointment",
    appointmentSchema
);

export default Appointment;