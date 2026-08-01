import jwt from "jsonwebtoken";
import UserRepository from "../users/user.repository.js";
import Roles from "../../constants/roles.js";

class AuthService {
    generateAccessToken(user) {
        return jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );
    }

    generateRefreshToken(user) {
        return jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_REFRESH_SECRET,
            {
                expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
            }
        );
    }

    async register(userData) {
        const existingEmail = await UserRepository.findByEmail(userData.email);

        if (existingEmail) {
            throw new Error("Email already exists.");
        }

        const existingPhone = await UserRepository.findByPhone(userData.phone);

        if (existingPhone) {
            throw new Error("Phone number already exists.");
        }

        if (
            userData.role !== Roles.DONOR &&
            userData.role !== Roles.ORGANIZATION
        ) {
            throw new Error("Invalid role.");
        }

        const user = await UserRepository.create(userData);

        const accessToken = this.generateAccessToken(user);

        const refreshToken = this.generateRefreshToken(user);

        await UserRepository.update(user._id, {
            refreshToken,
        });

        const createdUser = await UserRepository.findById(user._id);

        return {
            user: createdUser,
            accessToken,
            refreshToken,
        };
    }

    async login(email, password) {
        const user = await UserRepository.findByEmail(email);

        if (!user) {
            throw new Error("Invalid email or password.");
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (!isPasswordCorrect) {
            throw new Error("Invalid email or password.");
        }

        const accessToken = this.generateAccessToken(user);

        const refreshToken = this.generateRefreshToken(user);

        await UserRepository.update(user._id, {
            refreshToken,
            lastLogin: new Date(),
        });

        const loggedInUser = await UserRepository.findById(user._id);

        return {
            user: loggedInUser,
            accessToken,
            refreshToken,
        };
    }

    async logout(userId) {
        await UserRepository.update(userId, {
            refreshToken: "",
        });

        return {
            message: "Logged out successfully.",
        };
    }

    async getCurrentUser(userId) {
        const user = await UserRepository.findById(userId);

        if (!user) {
            throw new Error("User not found.");
        }

        return user;
    }
}

export default new AuthService();