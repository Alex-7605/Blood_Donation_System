import mongoose from "mongoose";

import BloodGroups from "../../constants/bloodGroups.js";

const emergencyRequestSchema = new mongoose.Schema(
    {
        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            index: true,
        },

        bloodGroup: {
            type: String,
            enum: BloodGroups,
            required: true,
        },

        unitsRequired: {
            type: Number,
            required: true,
            min: 1,
        },

        unitsFulfilled: {
            type: Number,
            default: 0,
            min: 0,
        },

        priority: {
            type: String,
            enum: [
                "LOW",
                "MEDIUM",
                "HIGH",
                "CRITICAL",
            ],
            default: "MEDIUM",
        },

        patientName: {
            type: String,
            required: true,
            trim: true,
        },

        patientAge: {
            type: Number,
            required: true,
        },

        hospitalDepartment: {
            type: String,
            required: true,
            trim: true,
        },

        reason: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: [
                "OPEN",
                "PARTIALLY_FULFILLED",
                "FULFILLED",
                "CANCELLED",
            ],
            default: "OPEN",
        },

        requiredBefore: {
            type: Date,
            required: true,
        },

        remarks: {
            type: String,
            default: "",
        },

        createdBy: {
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

emergencyRequestSchema.index({
    organization: 1,
    status: 1,
});

emergencyRequestSchema.index({
    bloodGroup: 1,
    priority: -1,
});

const EmergencyRequest = mongoose.model(
    "EmergencyRequest",
    emergencyRequestSchema
);

export default EmergencyRequest;