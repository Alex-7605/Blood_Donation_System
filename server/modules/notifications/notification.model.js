import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },

        type: {
            type: String,
            enum: [
                "GENERAL",
                "APPOINTMENT",
                "DONATION",
                "EMERGENCY",
                "INVENTORY",
                "SYSTEM",
            ],
            default: "GENERAL",
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

        isRead: {
            type: Boolean,
            default: false,
        },

        readAt: {
            type: Date,
            default: null,
        },

        metadata: {
            type: Object,
            default: {},
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

notificationSchema.index({
    recipient: 1,
    isRead: 1,
});

notificationSchema.index({
    createdAt: -1,
});

const Notification = mongoose.model(
    "Notification",
    notificationSchema
);

export default Notification;