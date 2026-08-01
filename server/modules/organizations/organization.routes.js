import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import OrganizationController from "./organization.controller.js";

const router = Router();

router.use(authenticate);

router.post(
    "/",
    authorize(Roles.ORGANIZATION),
    OrganizationController.createProfile
);

router.get(
    "/me",
    authorize(Roles.ORGANIZATION),
    OrganizationController.getProfile
);

router.put(
    "/me",
    authorize(Roles.ORGANIZATION),
    OrganizationController.updateProfile
);

router.delete(
    "/me",
    authorize(Roles.ORGANIZATION),
    OrganizationController.deleteProfile
);

router.get(
    "/",
    authorize(Roles.ADMIN),
    OrganizationController.getAllOrganizations
);

router.get(
    "/:id",
    authorize(Roles.ADMIN),
    OrganizationController.getOrganizationById
);

export default router;