import AIService from "./ai.service.js";

import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class AIController {
    recommendDonors = asyncHandler(async (req, res) => {
        const result =
            await AIService.recommendDonors(
                req.params.requestId
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Recommended donors fetched successfully.",
                result
            )
        );
    });

    predictBloodDemand = asyncHandler(async (req, res) => {
        const result =
            await AIService.predictBloodDemand();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Prediction generated successfully.",
                result
            )
        );
    });

    detectFraud = asyncHandler(async (req, res) => {
        const result =
            await AIService.detectFraud(req.body);

        return res.status(200).json(
            new ApiResponse(
                200,
                "Fraud analysis completed.",
                result
            )
        );
    });

    prioritizeEmergency = asyncHandler(async (req, res) => {
        const result =
            await AIService.prioritizeEmergency(
                req.params.requestId
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Emergency priority list generated.",
                result
            )
        );
    });

    health = asyncHandler(async (req, res) => {
        const result =
            await AIService.health();

        return res.status(200).json(
            new ApiResponse(
                200,
                "AI service health fetched successfully.",
                result
            )
        );
    });
}

export default new AIController();