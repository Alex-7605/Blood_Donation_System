import { Router } from "express";

import AuthRoutes from "../modules/auth/auth.routes.js";
import DonorRoutes from "../modules/donors/donor.routes.js";
import OrganizationRoutes from "../modules/organizations/organization.routes.js";
import InventoryRoutes from "../modules/inventory/inventory.routes.js";
import AppointmentRoutes from "../modules/appointments/appointment.routes.js";
import DonationRoutes from "../modules/donations/donation.routes.js";
import EmergencyRequestRoutes from "../modules/emergencyRequests/emergencyRequest.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/donors", DonorRoutes);
router.use("/organizations", OrganizationRoutes);
router.use("/inventory", InventoryRoutes);
router.use("/appointments", AppointmentRoutes);
router.use("/donations", DonationRoutes);
router.use("/emergency-requests", EmergencyRequestRoutes);

export default router;