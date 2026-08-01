import EmergencyRequestService from "./emergencyRequest.service.js";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class EmergencyRequestController {
    createRequest = asyncHandler(async (req, res) => {
        const request =
            await EmergencyRequestService.createRequest(
                req.user.id,
                req.body
            );

        return res.status(201).json(
            new ApiResponse(
                201,
                "Emergency request created successfully.",
                request
            )
        );
    });

    getMyRequests = asyncHandler(async (req, res) => {
        const requests =
            await EmergencyRequestService.getOrganizationRequests(
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency requests fetched successfully.",
                requests
            )
        );
    });

    getOpenRequests = asyncHandler(async (req, res) => {
        const requests =
            await EmergencyRequestService.getOpenRequests();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Open emergency requests fetched successfully.",
                requests
            )
        );
    });

    updateRequest = asyncHandler(async (req, res) => {
        const request =
            await EmergencyRequestService.updateRequest(
                req.params.id,
                req.body
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency request updated successfully.",
                request
            )
        );
    });

    fulfillRequest = asyncHandler(async (req, res) => {
        const request =
            await EmergencyRequestService.fulfillRequest(
                req.params.id,
                req.body.units
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency request updated successfully.",
                request
            )
        );
    });

    cancelRequest = asyncHandler(async (req, res) => {
        const request =
            await EmergencyRequestService.cancelRequest(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency request cancelled successfully.",
                request
            )
        );
    });

    getRequest = asyncHandler(async (req, res) => {
        const request =
            await EmergencyRequestService.getRequest(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency request fetched successfully.",
                request
            )
        );
    });

    getAllRequests = asyncHandler(async (req, res) => {
        const requests =
            await EmergencyRequestService.getAllRequests();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency requests fetched successfully.",
                requests
            )
        );
    });

    deleteRequest = asyncHandler(async (req, res) => {
        const result =
            await EmergencyRequestService.deleteRequest(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result.message
            )
        );
    });
}

export default new EmergencyRequestController();