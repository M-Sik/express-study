import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

// READ 고양이 데이터 다 조회
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// READ 특정 고양이 조회
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find((v) => v.id === params.id);
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// CREATE 새로운 고양이 추가
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const { name, age, species, isCute, friends } = req.body;

    const index = Cat.findIndex((v) => v.id === params.id);
    Cat[index] = { ...Cat[index], name, age, species, isCute, friends };

    const result = Cat[index];

    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;

    const index = Cat.findIndex((v) => v.id === params.id);
    Cat[index] = { ...Cat[index], ...body };

    const result = Cat[index];

    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: { newCat },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router;
