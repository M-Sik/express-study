import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

// express 미들웨어
// 미들웨어는 항상 최상단에 존재해야한다.
// 미들웨어의 경우 미들웨어가 먼저 실행되고 next함수를 통해 다음 라우터가 실행된다.
// use 사용시 전체 라우터에 대한 미들웨어가 됨
app.use((req, res, next) => {
  console.log("this is logging middleware");
  next();
});

// json middleware
app.use(express.json());

// READ 고양이 데이터 다 조회
app.get("/cats", (req, res) => {
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
app.get("/cats/:id", (req, res) => {
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
app.post("/cats", (req, res) => {
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

// 존재하지 않는 라우터에 올경우 error처리를 위해 라우터 가장 아래에 미들웨어를 둠
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

// 서버를 실행시킴 즉, 요청이 오는걸 기다리는 상태
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
