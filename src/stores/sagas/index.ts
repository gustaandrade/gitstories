import { put, call, takeLatest, all } from "redux-saga/effects";

import { GithubProfileApi, GithubReposApi } from "../../services";
import { getProfileFromJson, getRepositoriesFromJson } from "../../helpers";

import {
  LoadProfileSearchAction,
  ActionTypes,
  LoadRepositoriesSearchAction
} from "../actions/types";

function* loadProfileSaga(action: LoadProfileSearchAction) {
  const jsonResponse = yield call(GithubProfileApi, action.user);
  yield put({
    type: ActionTypes.SAVE_PROFILE_SEARCH,
    profile: getProfileFromJson(jsonResponse)
  });
}

function* loadRepositoriesSaga(action: LoadRepositoriesSearchAction) {
  const jsonResponse = yield call(GithubReposApi, action.user);
  yield put({
    type: ActionTypes.SAVE_REPOSITORIES_SEARCH,
    repositories: getRepositoriesFromJson(jsonResponse)
  });
}

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.LOAD_PROFILE_SEARCH, loadProfileSaga),
    takeLatest(ActionTypes.LOAD_REPOSITORIES_SEARCH, loadRepositoriesSaga)
  ]);
}
