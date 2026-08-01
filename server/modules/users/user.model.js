import mongoose from "mongoose";
import bcrypt from "bcrypt";

import Roles from "../../constants/roles.js";
import AccountStatus from "../../constants/accountStatus.js";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
            select: false,
        },

        phone: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true,
        },

        role: {
            type: String,
            enum: Object.values(Roles),
            required: true,
            default: Roles.DONOR,
        },

        status: {
            type: String,
            enum: Object.values(AccountStatus),
            default: AccountStatus.PENDING,
        },

        avatar: {
            type: String,
            default: "",
        },

        emailVerified: {
            type: Boolean,
            default: false,
        },

        phoneVerified: {
            type: Boolean,
            default: false,
        },

        refreshToken: {
            type: String,
            default: "",
            select: false,
        },

        lastLogin: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.methods.toJSON = function () {
    const user = this.toObject();

    delete user.password;
    delete user.refreshToken;

    return user;
};

const User = mongoose.model("User", userSchema);

export default User;