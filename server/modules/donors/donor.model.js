import mongoose from "mongoose";

import BloodGroups from "../../constants/bloodGroups.js";

const donorSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
            index: true,
        },

        bloodGroup: {
            type: String,
            enum: BloodGroups,
            required: true,
        },

        dateOfBirth: {
            type: Date,
            required: true,
        },

        gender: {
            type: String,
            enum: ["MALE", "FEMALE", "OTHER"],
            required: true,
        },

        weight: {
            type: Number,
            required: true,
            min: 30,
        },

        height: {
            type: Number,
            required: true,
            min: 100,
        },

        lastDonationDate: {
            type: Date,
            default: null,
        },

        isAvailable: {
            type: Boolean,
            default: true,
        },

        address: {
            addressLine1: {
                type: String,
                required: true,
                trim: true,
            },

            addressLine2: {
                type: String,
                default: "",
                trim: true,
            },

            city: {
                type: String,
                required: true,
                trim: true,
            },

            district: {
                type: String,
                required: true,
                trim: true,
            },

            state: {
                type: String,
                required: true,
                trim: true,
            },

            country: {
                type: String,
                required: true,
                trim: true,
            },

            postalCode: {
                type: String,
                required: true,
                trim: true,
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

        emergencyContact: {
            name: {
                type: String,
                required: true,
            },

            relationship: {
                type: String,
                required: true,
            },

            phone: {
                type: String,
                required: true,
            },
        },

        medicalConditions: [
            {
                type: String,
            },
        ],

        currentMedications: [
            {
                type: String,
            },
        ],

        allergies: [
            {
                type: String,
            },
        ],

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

donorSchema.index({
    location: "2dsphere",
});

const Donor = mongoose.model("Donor", donorSchema);

export default Donor;