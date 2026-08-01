import mongoose from "mongoose";

import BloodGroups from "../../constants/bloodGroups.js";

const donationSchema = new mongoose.Schema(
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

        appointment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
            required: true,
            unique: true,
        },

        bloodGroup: {
            type: String,
            enum: BloodGroups,
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            default: 1,
            min: 1,
        },

        donationDate: {
            type: Date,
            required: true,
            default: Date.now,
        },

        donationType: {
            type: String,
            enum: [
                "WHOLE_BLOOD",
                "PLATELETS",
                "PLASMA",
                "DOUBLE_RED_CELLS",
            ],
            default: "WHOLE_BLOOD",
        },

        hemoglobin: {
            type: Number,
            default: null,
        },

        bloodPressure: {
            systolic: {
                type: Number,
                default: null,
            },

            diastolic: {
                type: Number,
                default: null,
            },
        },

        pulseRate: {
            type: Number,
            default: null,
        },

        weight: {
            type: Number,
            default: null,
        },

        status: {
            type: String,
            enum: [
                "COMPLETED",
                "REJECTED",
            ],
            default: "COMPLETED",
        },

        remarks: {
            type: String,
            default: "",
        },

        recordedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

donationSchema.index({
    donor: 1,
    donationDate: -1,
});

donationSchema.index({
    organization: 1,
    donationDate: -1,
});

const Donation = mongoose.model(
    "Donation",
    donationSchema
);

export default Donation;