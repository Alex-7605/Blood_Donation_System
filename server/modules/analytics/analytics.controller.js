import AnalyticsService from "./analytics.service.js";

import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class AnalyticsController {
    dashboard = asyncHandler(async (req, res) => {
        const statistics =
            await AnalyticsService.getDashboardStatistics();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Dashboard statistics fetched successfully.",
                statistics
            )
        );
    });

    bloodGroups = asyncHandler(async (req, res) => {
        const statistics =
            await AnalyticsService.getBloodGroupDistribution();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Blood group statistics fetched successfully.",
                statistics
            )
        );
    });

    donations = asyncHandler(async (req, res) => {
        const statistics =
            await AnalyticsService.getMonthlyDonationTrend();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Donation statistics fetched successfully.",
                statistics
            )
        );
    });

    inventory = asyncHandler(async (req, res) => {
        const statistics =
            await AnalyticsService.getInventoryStatistics();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Inventory statistics fetched successfully.",
                statistics
            )
        );
    });

    emergency = asyncHandler(async (req, res) => {
        const statistics =
            await AnalyticsService.getEmergencyStatistics();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency statistics fetched successfully.",
                statistics
            )
        );
    });

    appointments = asyncHandler(async (req, res) => {
        const statistics =
            await AnalyticsService.getAppointmentStatistics();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointment statistics fetched successfully.",
                statistics
            )
        );
    });
}

export default new AnalyticsController();