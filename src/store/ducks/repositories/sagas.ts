import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { LoadSuccess, LoadFailure } from "../repositories/actions";

export function* load() {
  try {
    const response = yield call(api.get, "users/Marcos1710/repos");

    yield put(LoadSuccess(response.data));
  } catch (error) {
    yield put(LoadFailure());
  }
}
