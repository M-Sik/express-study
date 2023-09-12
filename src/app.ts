import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

// express 미들웨어
// 미들웨어는 항상 최상단에 존재해야한다.
// 미들웨어의 경우 미들웨어가 먼저 실행되고 next함수를 통해 다음 라우터가 실행된다.
// use 사용시 전체 라우터에 대한 미들웨어가 됨
app.use((req, res, next) => {
  console.log("this is all middleware");
  next();
});
// /cats/som 라우터에 가기전에 실행되는 미들웨어
app.get("/cats/som", (req, res, next) => {
  console.log("this is som middleware");
  next();
});

// 라우터
app.get("/", (req: express.Request, res: express.Response) => {
  // res.send로 프론트에 응답을 보내줌
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req: express.Request, res: express.Response) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
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
