import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import AppointmentController from "./appointment.controller.js";

const router = Router();

router.use(authenticate);

router.post(
    "/",
    authorize(Roles.DONOR),
    AppointmentController.createAppointment
);

router.get(
    "/me",
    authorize(Roles.DONOR),
    AppointmentController.getMyAppointments
);

router.get(
    "/organization",
    authorize(Roles.ORGANIZATION),
    AppointmentController.getOrganizationAppointments
);

router.patch(
    "/:id/status",
    authorize(Roles.ORGANIZATION),
    AppointmentController.updateStatus
);

router.patch(
    "/:id/cancel",
    authorize(Roles.DONOR),
    AppointmentController.cancelAppointment
);

router.get(
    "/",
    authorize(Roles.ADMIN),
    AppointmentController.getAllAppointments
);

router.get(
    "/:id",
    authorize(Roles.ADMIN),
    AppointmentController.getAppointmentById
);

export default router;