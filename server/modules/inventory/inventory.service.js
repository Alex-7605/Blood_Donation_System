import ApiError from "../../shared/errors/ApiError.js";
import InventoryRepository from "./inventory.repository.js";
import OrganizationRepository from "../organizations/organization.repository.js";

class InventoryService {
    async createInventory(userId, data) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        const existingInventory =
            await InventoryRepository.findByOrganizationAndBloodGroup(
                organization._id,
                data.bloodGroup
            );

        if (existingInventory) {
            throw new ApiError(
                409,
                "Inventory already exists for this blood group."
            );
        }

        return await InventoryRepository.create({
            organization: organization._id,
            bloodGroup: data.bloodGroup,
            availableUnits: data.availableUnits,
            reservedUnits: data.reservedUnits || 0,
            minimumThreshold: data.minimumThreshold || 5,
            maximumCapacity: data.maximumCapacity,
            lastUpdatedBy: userId,
        });
    }

    async getOrganizationInventory(userId) {
        const organization =
            await OrganizationRepository.findByUserId(userId);

        if (!organization) {
            throw new ApiError(
                404,
                "Organization profile not found."
            );
        }

        return await InventoryRepository.findByOrganization(
            organization._id
        );
    }

    async updateInventory(userId, inventoryId, data) {
        const inventory =
            await InventoryRepository.findById(inventoryId);

        if (!inventory) {
            throw new ApiError(
                404,
                "Inventory not found."
            );
        }

        return await InventoryRepository.update(
            inventoryId,
            {
                ...data,
                lastUpdatedBy: userId,
            }
        );
    }

    async deleteInventory(inventoryId) {
        const inventory =
            await InventoryRepository.findById(inventoryId);

        if (!inventory) {
            throw new ApiError(
                404,
                "Inventory not found."
            );
        }

        await InventoryRepository.delete(inventoryId);

        return {
            message:
                "Inventory deleted successfully.",
        };
    }

    async getInventoryById(id) {
        const inventory =
            await InventoryRepository.findById(id);

        if (!inventory) {
            throw new ApiError(
                404,
                "Inventory not found."
            );
        }

        return inventory;
    }

    async getAllInventory() {
        return await InventoryRepository.getAll();
    }
}

export default new InventoryService();