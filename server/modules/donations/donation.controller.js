import DonationService from "./donation.service.js";
import DonorRepository from "../donors/donor.repository.js";
import OrganizationRepository from "../organizations/organization.repository.js";

import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class DonationController {
    recordDonation = asyncHandler(async (req, res) => {
        const donation =
            await DonationService.recordDonation(
                req.user.id,
                req.body
            );

        return res.status(201).json(
            new ApiResponse(
                201,
                "Donation recorded successfully.",
                donation
            )
        );
    });

    getMyDonationHistory = asyncHandler(async (req, res) => {
        const donor =
            await DonorRepository.findByUserId(req.user.id);

        const donations =
            await DonationService.getDonorHistory(
                donor._id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Donation history fetched successfully.",
                donations
            )
        );
    });

    getOrganizationDonationHistory =
        asyncHandler(async (req, res) => {
            const organization =
                await OrganizationRepository.findByUserId(
                    req.user.id
                );

            const donations =
                await DonationService.getOrganizationHistory(
                    organization._id
                );

            return res.status(200).json(
                new ApiResponse(
                    200,
                    "Donation history fetched successfully.",
                    donations
                )
            );
        });

    getDonation = asyncHandler(async (req, res) => {
        const donation =
            await DonationService.getDonation(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Donation fetched successfully.",
                donation
            )
        );
    });

    getAllDonations = asyncHandler(async (req, res) => {
        const donations =
            await DonationService.getAllDonations();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Donations fetched successfully.",
                donations
            )
        );
    });

    deleteDonation = asyncHandler(async (req, res) => {
        const result =
            await DonationService.deleteDonation(
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

export default new DonationController();