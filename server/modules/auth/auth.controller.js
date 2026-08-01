import AuthService from "./auth.service.js";

class AuthController {
    async register(req, res, next) {
        try {
            const result = await AuthService.register(req.body);

            return res.status(201).json({
                success: true,
                message: "User registered successfully.",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const result = await AuthService.login(email, password);

            return res.status(200).json({
                success: true,
                message: "Login successful.",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            const result = await AuthService.logout(req.user.id);

            return res.status(200).json({
                success: true,
                message: result.message,
            });
        } catch (error) {
            next(error);
        }
    }

    async me(req, res, next) {
        try {
            const user = await AuthService.getCurrentUser(req.user.id);

            return res.status(200).json({
                success: true,
                data: user,
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();