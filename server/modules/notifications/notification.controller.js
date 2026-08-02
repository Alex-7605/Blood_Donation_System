import NotificationService from "./notification.service.js";

import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class NotificationController {
    getMyNotifications = asyncHandler(async (req, res) => {
        const notifications =
            await NotificationService.getMyNotifications(
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Notifications fetched successfully.",
                notifications
            )
        );
    });

    getUnreadNotifications =
        asyncHandler(async (req, res) => {
            const notifications =
                await NotificationService.getUnreadNotifications(
                    req.user.id
                );

            return res.status(200).json(
                new ApiResponse(
                    200,
                    "Unread notifications fetched successfully.",
                    notifications
                )
            );
        });

    markAsRead = asyncHandler(async (req, res) => {
        const notification =
            await NotificationService.markAsRead(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Notification marked as read.",
                notification
            )
        );
    });

    markAllAsRead = asyncHandler(async (req, res) => {
        const result =
            await NotificationService.markAllAsRead(
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result.message
            )
        );
    });

    getNotification = asyncHandler(async (req, res) => {
        const notification =
            await NotificationService.getNotification(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Notification fetched successfully.",
                notification
            )
        );
    });

    getAllNotifications =
        asyncHandler(async (req, res) => {
            const notifications =
                await NotificationService.getAllNotifications();

            return res.status(200).json(
                new ApiResponse(
                    200,
                    "Notifications fetched successfully.",
                    notifications
                )
            );
        });

    deleteNotification =
        asyncHandler(async (req, res) => {
            const result =
                await NotificationService.deleteNotification(
                    req.params.id
                );

            return res.status(200).json(
                new ApiResponse(
                    200,
                    result.message
                )
            );
        });
}

export default new NotificationController();