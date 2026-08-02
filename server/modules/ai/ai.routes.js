import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import AIController from "./ai.controller.js";

const router = Router();

router.use(authenticate);

router.get(
    "/health",
    authorize(Roles.ADMIN),
    AIController.health
);

router.get(
    "/recommend/:requestId",
    authorize(Roles.ORGANIZATION, Roles.ADMIN),
    AIController.recommendDonors
);

router.get(
    "/predict-demand",
    authorize(Roles.ADMIN),
    AIController.predictBloodDemand
);

router.post(
    "/fraud-detection",
    authorize(Roles.ADMIN),
    AIController.detectFraud
);

router.get(
    "/priority/:requestId",
    authorize(Roles.ORGANIZATION, Roles.ADMIN),
    AIController.prioritizeEmergency
);

export default router;