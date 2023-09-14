import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // cat 정보를 관리하는 라우터 연결
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // express 미들웨어
    // 미들웨어는 항상 최상단에 존재해야한다.
    // 미들웨어의 경우 미들웨어가 먼저 실행되고 next함수를 통해 다음 라우터가 실행된다.
    // use 사용시 전체 라우터에 대한 미들웨어가 됨
    this.app.use((req, res, next) => {
      console.log("this is logging middleware");
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 존재하지 않는 라우터에 올경우 error처리를 위해 라우터 가장 아래에 미들웨어를 둠
    this.app.use((req, res, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    // 서버를 실행시킴 즉, 요청이 오는걸 기다리는 상태
    this.app.listen(8000, () => {
      console.log(`server is on port ${8000}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
