import Notification from "./notification.model.js";

class NotificationRepository {
    async create(data) {
        return await Notification.create(data);
    }

    async findById(id) {
        return await Notification.findById(id)
            .populate("recipient");
    }

    async findByRecipient(userId) {
        return await Notification.find({
            recipient: userId,
        }).sort({
            createdAt: -1,
        });
    }

    async findUnread(userId) {
        return await Notification.find({
            recipient: userId,
            isRead: false,
        }).sort({
            createdAt: -1,
        });
    }

    async update(id, data) {
        return await Notification.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true,
            }
        );
    }

    async delete(id) {
        return await Notification.findByIdAndDelete(id);
    }

    async getAll() {
        return await Notification.find()
            .populate("recipient")
            .sort({
                createdAt: -1,
            });
    }
}

export default new NotificationRepository();