import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  addCat,
  deleteCat,
  readAllCat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

router.get("/cats", readAllCat);
router.get("/cats/:id", readCat);
router.post("/cats", addCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialCat);
router.delete("/cats/:id", deleteCat);

export default router;
