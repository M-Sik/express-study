import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

const data = [1, 2, 3, 4];

// 라우터
app.get("/", (req: express.Request, res: express.Response) => {
  // res.send로 프론트에 응답을 보내줌
  res.send({ cats: Cat });
});

// 서버를 실행시킴 즉, 요청이 오는걸 기다리는 상태
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
