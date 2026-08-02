import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import NotificationController from "./notification.controller.js";

const router = Router();

router.use(authenticate);

router.get(
    "/me",
    NotificationController.getMyNotifications
);

router.get(
    "/unread",
    NotificationController.getUnreadNotifications
);

router.patch(
    "/read-all",
    NotificationController.markAllAsRead
);

router.patch(
    "/:id/read",
    NotificationController.markAsRead
);

router.get(
    "/",
    authorize(Roles.ADMIN),
    NotificationController.getAllNotifications
);

router.get(
    "/:id",
    NotificationController.getNotification
);

router.delete(
    "/:id",
    NotificationController.deleteNotification
);

export default router;