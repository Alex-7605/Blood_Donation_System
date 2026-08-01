import User from "./user.model.js";

class UserRepository {
    async create(userData) {
        return await User.create(userData);
    }

    async findById(id) {
        return await User.findById(id);
    }

    async findByEmail(email) {
        return await User.findOne({ email }).select("+password +refreshToken");
    }

    async findByPhone(phone) {
        return await User.findOne({ phone });
    }

    async exists(email) {
        return await User.exists({ email });
    }

    async update(id, data) {
        return await User.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserRepository();