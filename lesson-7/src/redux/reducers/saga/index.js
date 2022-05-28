import { put, putResolve, take, takeEvery } from "redux-saga/effects";
import { SEND_MESSAGE, SEND_MESSAGE_ROBOT } from "../../actions/actionType";
const wait = (t) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });

export function* watchClickSaga() {
  console.log("watchClickSaga");
  yield takeEvery(SEND_MESSAGE, workerSagaRobotAnswer);
}
export function* workerSagaRobotAnswer() {
  yield wait(1000);
  console.log("robot answer");
  const obj = {
    [`id11`]: {
      text: "robot answer",
      author: "ROBOT",
      id: `${Date.now()}`,
    },
  };
  yield put({ type: SEND_MESSAGE_ROBOT, payload: obj });
}
export default function* rootSaga() {
  console.log("begin");
  yield watchClickSaga();
}
