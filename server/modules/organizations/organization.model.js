import mongoose from "mongoose";

import OrganizationTypes from "../../constants/organizationTypes.js";

const organizationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
            index: true,
        },

        organizationType: {
            type: String,
            enum: Object.values(OrganizationTypes),
            required: true,
        },

        organizationName: {
            type: String,
            required: true,
            trim: true,
        },

        registrationNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        licenseNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        website: {
            type: String,
            default: "",
        },

        description: {
            type: String,
            default: "",
        },

        address: {
            addressLine1: {
                type: String,
                required: true,
            },

            addressLine2: {
                type: String,
                default: "",
            },

            city: {
                type: String,
                required: true,
            },

            district: {
                type: String,
                required: true,
            },

            state: {
                type: String,
                required: true,
            },

            country: {
                type: String,
                required: true,
            },

            postalCode: {
                type: String,
                required: true,
            },
        },

        location: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point",
            },

            coordinates: {
                type: [Number],
                default: [0, 0],
            },
        },

        verificationStatus: {
            type: String,
            enum: ["PENDING", "APPROVED", "REJECTED"],
            default: "PENDING",
        },

        operatingHours: {
            open: {
                type: String,
                default: "",
            },

            close: {
                type: String,
                default: "",
            },
        },

        emergencyContact: {
            name: String,
            phone: String,
        },

        profileCompleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

organizationSchema.index({
    location: "2dsphere",
});

const Organization = mongoose.model(
    "Organization",
    organizationSchema
);

export default Organization;