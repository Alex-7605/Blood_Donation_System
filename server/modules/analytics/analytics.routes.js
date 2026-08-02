import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import AnalyticsController from "./analytics.controller.js";

const router = Router();

router.use(authenticate);

router.use(authorize(Roles.ADMIN));

router.get(
    "/dashboard",
    AnalyticsController.dashboard
);

router.get(
    "/blood-groups",
    AnalyticsController.bloodGroups
);

router.get(
    "/donations",
    AnalyticsController.donations
);

router.get(
    "/inventory",
    AnalyticsController.inventory
);

router.get(
    "/emergency",
    AnalyticsController.emergency
);

router.get(
    "/appointments",
    AnalyticsController.appointments
);

export default router;