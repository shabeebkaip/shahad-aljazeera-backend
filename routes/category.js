import express from "express";
import categoryCreate from "../controllers/category/create.js";
import categoryGet from "../controllers/category/get.js";
import categoryUpdate from "../controllers/category/update.js";
import categoryDelete from "../controllers/category/delete.js";
import categoryBulkDelete from "../controllers/category/bulkDelete.js";

const categoryRouter = express.Router();

categoryRouter.post("", categoryCreate);
categoryRouter.get("", categoryGet);
categoryRouter.put("/:id", categoryUpdate);
categoryRouter.delete("/:id", categoryDelete);
categoryRouter.post("/bulk-delete", categoryBulkDelete);

export default categoryRouter;
