import { put, takeLatest, all } from "redux-saga/effects";

function* fetchData() {
  try {
    // Simulate an API call
    const response = yield fetch(
      "https://cms-vietswiss-staging.absolutagentur.ch/api/projects?populate=*"
    );
    const data = yield response.json();
    // Dispatch an action to set the data in the store
    yield put({ type: "SET_DATA", payload: data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* updateProduct(action) {
  console.log(action);
  try {
    const idPrj = action.data.data.id;
    const dataPrj = action.data;
    const response = yield fetch(
      `https://cms-vietswiss-staging.absolutagentur.ch/api/projects/${idPrj}`,
      {
        method: "PUT", // Sử dụng phương thức PUT.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPrj),
      }
    );
    const data = yield response.json();
    console.log(data);
    // Dispatch an action to set the data in the store
    // yield put({ type: "SET_DATA", payload: data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
function* watchFetchData() {
  yield takeLatest("FETCH_DATA", fetchData);
  yield takeLatest("UPDATE_PRODUCT", updateProduct);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
