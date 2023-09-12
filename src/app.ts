import * as express from "express";
const app: express.Express = express();
const port: number = 8000;
// 라우터
app.get("/", (req, res) => {
  // res.send로 프론트에 응답을 보내줌
  res.send({ name: "kim", age: 28, friends: [1, 2, 3, 4] });
});
// 서버를 실행시킴 즉, 요청이 오는걸 기다리는 상태
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
