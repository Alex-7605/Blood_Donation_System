import { Router } from "express";

import AuthRoutes from "../modules/auth/auth.routes.js";
import DonorRoutes from "../modules/donors/donor.routes.js";
import OrganizationRoutes from "../modules/organizations/organization.routes.js";
import InventoryRoutes from "../modules/inventory/inventory.routes.js";
import AppointmentRoutes from "../modules/appointments/appointment.routes.js";
import DonationRoutes from "../modules/donations/donation.routes.js";
import EmergencyRequestRoutes from "../modules/emergencyRequests/emergencyRequest.routes.js";
import NotificationRoutes from "../modules/notifications/notification.routes.js";
import AnalyticsRoutes from "../modules/analytics/analytics.routes.js";
import AIRoutes from "../modules/ai/ai.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/donors", DonorRoutes);
router.use("/organizations", OrganizationRoutes);
router.use("/inventory", InventoryRoutes);
router.use("/appointments", AppointmentRoutes);
router.use("/donations", DonationRoutes);
router.use("/emergency-requests", EmergencyRequestRoutes);
router.use("/notifications", NotificationRoutes);
router.use("/analytics", AnalyticsRoutes);
router.use("/ai", AIRoutes);

export default router;