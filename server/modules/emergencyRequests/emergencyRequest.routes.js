import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import EmergencyRequestController from "./emergencyRequest.controller.js";

const router = Router();

router.use(authenticate);

router.post(
    "/",
    authorize(Roles.ORGANIZATION),
    EmergencyRequestController.createRequest
);

router.get(
    "/me",
    authorize(Roles.ORGANIZATION),
    EmergencyRequestController.getMyRequests
);

router.patch(
    "/:id",
    authorize(Roles.ORGANIZATION),
    EmergencyRequestController.updateRequest
);

router.patch(
    "/:id/fulfill",
    authorize(Roles.ORGANIZATION),
    EmergencyRequestController.fulfillRequest
);

router.patch(
    "/:id/cancel",
    authorize(Roles.ORGANIZATION),
    EmergencyRequestController.cancelRequest
);

router.get(
    "/open",
    authorize(Roles.DONOR, Roles.ADMIN),
    EmergencyRequestController.getOpenRequests
);

router.get(
    "/",
    authorize(Roles.ADMIN),
    EmergencyRequestController.getAllRequests
);

router.get(
    "/:id",
    authorize(Roles.ADMIN),
    EmergencyRequestController.getRequest
);

router.delete(
    "/:id",
    authorize(Roles.ADMIN),
    EmergencyRequestController.deleteRequest
);

export default router;