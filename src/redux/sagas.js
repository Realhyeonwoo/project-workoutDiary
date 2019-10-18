import axios from "axios";
import * as type from "./actionTypes";
import { all, put, takeEvery } from "redux-saga/effects";

export function* loadSportsList() {
  console.log("saga Load Start");
  const response = yield axios.get("/sportslist");
  console.log("넘길 데이터들");
  console.dir(response.data);
  yield put({ type: type.READ_SPORT, sportsList: response.data });
}

export function* createSport(sort, name) {
  console.log(sort, name);
  const response = yield axios.post("/sportslist/add", {
    sort,
    name
  });
  yield console.log(response.data);
  yield put({ type: type.LOAD_SPORT });
}

export function* deleteSport({ id }) {
  console.log(`sagas: ${id}`);
  const result = yield axios.delete("/sportslist/delete", { data: { id } });
  console.dir(result);
  if (result.status === 200) {
    console.log("Complete Delete");
    yield put({ type: type.LOAD_SPORT });
  }
}

export function* updateSport({ id, sort, name }) {
  console.log("update");
  console.log(id, sort, name);
  const result = yield axios.put("/sportslist/update", { id, sort, name });
  if (result.status === 200) {
    console.log("Complete Update");
    yield put({ type: type.LOAD_SPORT });
  }
}

export function* watchSportsList() {
  console.log("1");
  yield takeEvery(type.LOAD_SPORT, loadSportsList);
  yield takeEvery(type.SAGA_CREATE_SPORT, createSport);
  yield takeEvery(type.DELETE_SPORT, deleteSport);
  yield takeEvery(type.UPDATE_SPORT, updateSport);
}

export default function* rootSaga() {
  yield all([watchSportsList()]);
}
