import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import DonorController from "./donor.controller.js";

const router = Router();

router.use(authenticate);

router.post(
    "/",
    authorize(Roles.DONOR),
    DonorController.createProfile
);

router.get(
    "/me",
    authorize(Roles.DONOR),
    DonorController.getProfile
);

router.put(
    "/me",
    authorize(Roles.DONOR),
    DonorController.updateProfile
);

router.delete(
    "/me",
    authorize(Roles.DONOR),
    DonorController.deleteProfile
);

router.get(
    "/",
    authorize(Roles.ADMIN),
    DonorController.getAllDonors
);

router.get(
    "/:id",
    authorize(Roles.ADMIN),
    DonorController.getDonorById
);

export default router;