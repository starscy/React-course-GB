import { put, call, putResolve, take, takeEvery } from "redux-saga/effects";
import {
  showError,
  hideLoader,
  setUsers,
  showLoader,
  hideError,
} from "../../actions/actions";

import {
  SEND_MESSAGE,
  SEND_MESSAGE_ROBOT,
  GET_USERS,
} from "../../actions/actionType";

import { loadApiReducer } from "../apiReducer";

const wait = (t) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });

export default function* rootSaga() {
  yield watchClickSaga();
}

export function* watchClickSaga() {
  console.log("watchClickSaga");
  yield takeEvery(SEND_MESSAGE, workerSagaRobotAnswer);
  yield takeEvery(GET_USERS, workerSagaLoadingUsers);
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
export function* workerSagaLoadingUsers() {
  try {
    yield put(showLoader());
    yield wait(1000);
    const data = yield call(loadApiReducer);
    console.log(data, "data");
    yield put(setUsers(data));
    yield put(hideLoader());
    yield put(hideError());
  } catch (error) {
    yield put(hideLoader());
    yield put(showError(error));
  }
}
