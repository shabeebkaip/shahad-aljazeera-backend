import express from "express";
import createDish from "../controllers/dish/create.js";
import getDish from "../controllers/dish/get.js";
import updateDish from "../controllers/dish/update.js";
import deleteDish from "../controllers/dish/delete.js";
import bulkDelete from "../controllers/dish/bulkDelete.js";

const dishRouter = express.Router();

dishRouter.post("", createDish);
dishRouter.get("", getDish);
dishRouter.put("/:id", updateDish);
dishRouter.delete("/:id", deleteDish);
dishRouter.post("/bulk-delete", bulkDelete);

export default dishRouter;
