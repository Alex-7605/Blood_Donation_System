import mongoose from "mongoose";

import BloodGroups from "../../constants/bloodGroups.js";

const inventorySchema = new mongoose.Schema(
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

        availableUnits: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },

        reservedUnits: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },

        minimumThreshold: {
            type: Number,
            default: 5,
            min: 0,
        },

        maximumCapacity: {
            type: Number,
            required: true,
            min: 1,
        },

        lastUpdatedBy: {
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

inventorySchema.index({
    organization: 1,
    bloodGroup: 1,
}, {
    unique: true,
});

const Inventory = mongoose.model(
    "Inventory",
    inventorySchema
);

export default Inventory;