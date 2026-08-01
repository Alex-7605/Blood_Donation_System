import InventoryService from "./inventory.service.js";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class InventoryController {
    createInventory = asyncHandler(async (req, res) => {
        const inventory =
            await InventoryService.createInventory(
                req.user.id,
                req.body
            );

        return res.status(201).json(
            new ApiResponse(
                201,
                "Inventory created successfully.",
                inventory
            )
        );
    });

    getMyInventory = asyncHandler(async (req, res) => {
        const inventory =
            await InventoryService.getOrganizationInventory(
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Inventory fetched successfully.",
                inventory
            )
        );
    });

    updateInventory = asyncHandler(async (req, res) => {
        const inventory =
            await InventoryService.updateInventory(
                req.user.id,
                req.params.id,
                req.body
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Inventory updated successfully.",
                inventory
            )
        );
    });

    deleteInventory = asyncHandler(async (req, res) => {
        const result =
            await InventoryService.deleteInventory(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result.message
            )
        );
    });

    getInventoryById = asyncHandler(async (req, res) => {
        const inventory =
            await InventoryService.getInventoryById(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Inventory fetched successfully.",
                inventory
            )
        );
    });

    getAllInventory = asyncHandler(async (req, res) => {
        const inventory =
            await InventoryService.getAllInventory();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Inventory fetched successfully.",
                inventory
            )
        );
    });
}

export default new InventoryController();