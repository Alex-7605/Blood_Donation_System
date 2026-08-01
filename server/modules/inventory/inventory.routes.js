import { Router } from "express";

import authenticate from "../../middleware/authenticate.js";
import authorize from "../../middleware/authorize.js";

import Roles from "../../constants/roles.js";

import InventoryController from "./inventory.controller.js";

const router = Router();

router.use(authenticate);

router.post(
    "/",
    authorize(Roles.ORGANIZATION),
    InventoryController.createInventory
);

router.get(
    "/me",
    authorize(Roles.ORGANIZATION),
    InventoryController.getMyInventory
);

router.put(
    "/:id",
    authorize(Roles.ORGANIZATION),
    InventoryController.updateInventory
);

router.delete(
    "/:id",
    authorize(Roles.ORGANIZATION),
    InventoryController.deleteInventory
);

router.get(
    "/",
    authorize(Roles.ADMIN),
    InventoryController.getAllInventory
);

router.get(
    "/:id",
    authorize(Roles.ADMIN),
    InventoryController.getInventoryById
);

export default router;