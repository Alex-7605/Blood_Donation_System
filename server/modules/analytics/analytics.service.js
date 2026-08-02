import User from "../users/user.model.js";
import Donor from "../donors/donor.model.js";
import Organization from "../organizations/organization.model.js";
import Inventory from "../inventory/inventory.model.js";
import Appointment from "../appointments/appointment.model.js";
import Donation from "../donations/donation.model.js";
import EmergencyRequest from "../emergencyRequests/emergencyRequest.model.js";

class AnalyticsService {
    async getDashboardStatistics() {
        const [
            totalUsers,
            totalDonors,
            totalOrganizations,
            totalAppointments,
            totalDonations,
            totalEmergencyRequests,
            totalInventory,
        ] = await Promise.all([
            User.countDocuments(),
            Donor.countDocuments(),
            Organization.countDocuments(),
            Appointment.countDocuments(),
            Donation.countDocuments(),
            EmergencyRequest.countDocuments(),
            Inventory.countDocuments(),
        ]);

        return {
            totalUsers,
            totalDonors,
            totalOrganizations,
            totalAppointments,
            totalDonations,
            totalEmergencyRequests,
            totalInventory,
        };
    }

    async getBloodGroupDistribution() {
        return await Donor.aggregate([
            {
                $group: {
                    _id: "$bloodGroup",
                    total: {
                        $sum: 1,
                    },
                },
            },
            {
                $sort: {
                    _id: 1,
                },
            },
        ]);
    }

    async getMonthlyDonationTrend() {
        return await Donation.aggregate([
            {
                $group: {
                    _id: {
                        year: {
                            $year: "$donationDate",
                        },
                        month: {
                            $month: "$donationDate",
                        },
                    },
                    donations: {
                        $sum: 1,
                    },
                },
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1,
                },
            },
        ]);
    }

    async getInventoryStatistics() {
        return await Inventory.aggregate([
            {
                $group: {
                    _id: "$bloodGroup",
                    availableUnits: {
                        $sum: "$availableUnits",
                    },
                    reservedUnits: {
                        $sum: "$reservedUnits",
                    },
                },
            },
            {
                $sort: {
                    _id: 1,
                },
            },
        ]);
    }

    async getEmergencyStatistics() {
        return await EmergencyRequest.aggregate([
            {
                $group: {
                    _id: "$status",
                    total: {
                        $sum: 1,
                    },
                },
            },
            {
                $sort: {
                    _id: 1,
                },
            },
        ]);
    }

    async getAppointmentStatistics() {
        return await Appointment.aggregate([
            {
                $group: {
                    _id: "$status",
                    total: {
                        $sum: 1,
                    },
                },
            },
            {
                $sort: {
                    _id: 1,
                },
            },
        ]);
    }
}

export default new AnalyticsService();