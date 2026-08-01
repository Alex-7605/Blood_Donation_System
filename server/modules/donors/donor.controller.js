import DonorService from "./donor.service.js";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class DonorController {
    createProfile = asyncHandler(async (req, res) => {
        const donor = await DonorService.createProfile(req.user.id, req.body);

        return res
            .status(201)
            .json(new ApiResponse(201, "Donor profile created successfully.", donor));
    });

    getProfile = asyncHandler(async (req, res) => {
        const donor = await DonorService.getProfile(req.user.id);

        return res
            .status(200)
            .json(new ApiResponse(200, "Donor profile fetched successfully.", donor));
    });

    updateProfile = asyncHandler(async (req, res) => {
        const donor = await DonorService.updateProfile(req.user.id, req.body);

        return res
            .status(200)
            .json(new ApiResponse(200, "Donor profile updated successfully.", donor));
    });

    deleteProfile = asyncHandler(async (req, res) => {
        const result = await DonorService.deleteProfile(req.user.id);

        return res
            .status(200)
            .json(new ApiResponse(200, result.message));
    });

    getAllDonors = asyncHandler(async (req, res) => {
        const donors = await DonorService.getAllDonors();

        return res
            .status(200)
            .json(new ApiResponse(200, "Donors fetched successfully.", donors));
    });

    getDonorById = asyncHandler(async (req, res) => {
        const donor = await DonorService.getDonorById(req.params.id);

        return res
            .status(200)
            .json(new ApiResponse(200, "Donor fetched successfully.", donor));
    });
}

export default new DonorController();