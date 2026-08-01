import Inventory from "./inventory.model.js";

class InventoryRepository {

    async create(data) {
        return await Inventory.create(data);
    }

    async findById(id) {
        return await Inventory.findById(id)
            .populate("organization")
            .populate("lastUpdatedBy");
    }

    async findByOrganization(organizationId) {
        return await Inventory.find({
            organization: organizationId,
        });
    }

    async findByOrganizationAndBloodGroup(
        organizationId,
        bloodGroup
    ) {
        return await Inventory.findOne({
            organization: organizationId,
            bloodGroup,
        });
    }

    async getAll() {
        return await Inventory.find()
            .populate("organization")
            .populate("lastUpdatedBy");
    }

    async update(id, data) {
        return await Inventory.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true,
            }
        )
            .populate("organization")
            .populate("lastUpdatedBy");
    }

    async delete(id) {
        return await Inventory.findByIdAndDelete(id);
    }

}

export default new InventoryRepository();