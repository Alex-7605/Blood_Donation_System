import ApiError from "../../shared/errors/ApiError.js";
import NotificationRepository from "./notification.repository.js";

class NotificationService {
    async createNotification(data) {
        return await NotificationRepository.create({
            recipient: data.recipient,
            title: data.title,
            message: data.message,
            type: data.type || "GENERAL",
            priority: data.priority || "MEDIUM",
            metadata: data.metadata || {},
        });
    }

    async getMyNotifications(userId) {
        return await NotificationRepository.findByRecipient(
            userId
        );
    }

    async getUnreadNotifications(userId) {
        return await NotificationRepository.findUnread(
            userId
        );
    }

    async markAsRead(id) {
        const notification =
            await NotificationRepository.findById(id);

        if (!notification) {
            throw new ApiError(
                404,
                "Notification not found."
            );
        }

        return await NotificationRepository.update(id, {
            isRead: true,
            readAt: new Date(),
        });
    }

    async markAllAsRead(userId) {
        const notifications =
            await NotificationRepository.findUnread(
                userId
            );

        for (const notification of notifications) {
            await NotificationRepository.update(
                notification._id,
                {
                    isRead: true,
                    readAt: new Date(),
                }
            );
        }

        return {
            message:
                "All notifications marked as read.",
        };
    }

    async getNotification(id) {
        const notification =
            await NotificationRepository.findById(id);

        if (!notification) {
            throw new ApiError(
                404,
                "Notification not found."
            );
        }

        return notification;
    }

    async getAllNotifications() {
        return await NotificationRepository.getAll();
    }

    async deleteNotification(id) {
        const notification =
            await NotificationRepository.findById(id);

        if (!notification) {
            throw new ApiError(
                404,
                "Notification not found."
            );
        }

        await NotificationRepository.delete(id);

        return {
            message:
                "Notification deleted successfully.",
        };
    }
}

export default new NotificationService();