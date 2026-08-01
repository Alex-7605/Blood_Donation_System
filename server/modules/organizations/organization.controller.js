import OrganizationService from "./organization.service.js";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class OrganizationController {
    createProfile = asyncHandler(async (req, res) => {
        const organization =
            await OrganizationService.createProfile(
                req.user.id,
                req.body
            );

        return res.status(201).json(
            new ApiResponse(
                201,
                "Organization profile created successfully.",
                organization
            )
        );
    });

    getProfile = asyncHandler(async (req, res) => {
        const organization =
            await OrganizationService.getProfile(
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Organization profile fetched successfully.",
                organization
            )
        );
    });

    updateProfile = asyncHandler(async (req, res) => {
        const organization =
            await OrganizationService.updateProfile(
                req.user.id,
                req.body
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Organization profile updated successfully.",
                organization
            )
        );
    });

    deleteProfile = asyncHandler(async (req, res) => {
        const result =
            await OrganizationService.deleteProfile(
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result.message
            )
        );
    });

    getAllOrganizations = asyncHandler(async (req, res) => {
        const organizations =
            await OrganizationService.getAllOrganizations();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Organizations fetched successfully.",
                organizations
            )
        );
    });

    getOrganizationById = asyncHandler(async (req, res) => {
        const organization =
            await OrganizationService.getOrganizationById(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Organization fetched successfully.",
                organization
            )
        );
    });
}

export default new OrganizationController();