import jwt from "jsonwebtoken";
import UserRepository from "../modules/users/user.repository.js";

const authenticate = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).json({
                success: false,
                message: "Authorization header is missing.",
            });
        }

        const parts = authorization.split(" ");

        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({
                success: false,
                message: "Invalid authorization format.",
            });
        }

        const token = parts[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await UserRepository.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found.",
            });
        }

        req.user = {
            id: user._id,
            role: user.role,
        };

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized.",
        });
    }
};

export default authenticate;