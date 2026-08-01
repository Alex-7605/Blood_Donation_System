import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import DonationController from "./donation.controller.js";

const router = Router();

router.use(authenticate);

router.post(
    "/",
    authorize(Roles.ORGANIZATION),
    DonationController.recordDonation
);

router.get(
    "/me",
    authorize(Roles.DONOR),
    DonationController.getMyDonationHistory
);

router.get(
    "/organization",
    authorize(Roles.ORGANIZATION),
    DonationController.getOrganizationDonationHistory
);

router.get(
    "/",
    authorize(Roles.ADMIN),
    DonationController.getAllDonations
);

router.get(
    "/:id",
    authorize(Roles.ADMIN),
    DonationController.getDonation
);

router.delete(
    "/:id",
    authorize(Roles.ADMIN),
    DonationController.deleteDonation
);

export default router;