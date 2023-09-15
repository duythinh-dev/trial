import { put, takeLatest, all } from "redux-saga/effects";

function* fetchData() {
  try {
    // Simulate an API call
    const response = yield fetch(
      "https://cms-vietswiss-staging.absolutagentur.ch/api/projects?populate=*"
    );
    const data = yield response.json();
    // Dispatch an action to set the data in the store
    yield put({ type: "GET_DATA_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* createProduct(action) {
  try {
    let dataImage;

    // Kiểm tra xem có fileImage để tải lên hay không
    if (action.data.data.fileImage) {
      const responseUploadImage = yield fetch(
        `https://cms-vietswiss-staging.absolutagentur.ch/api/upload`,
        {
          method: "POST",
          body: action.data.data.fileImage,
        }
      );

      dataImage = yield responseUploadImage.json();
    } else {
      // Nếu không có fileImage, đặt dataImage thành một mảng trống
      dataImage = [];
    }
    // Simulate an API call
    const response = yield fetch(
      `https://cms-vietswiss-staging.absolutagentur.ch/api/projects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            relation: 2,
            relations: [2, 4],
            image: { id: dataImage[0].id },
            name: action.data.data.name,
            description: action.data.data.description,
          },
        }),
      }
    );
    const data = yield response.json();
    const result = { ...data.data };
    result.attributes.image = {
      data: {
        id: dataImage[0].id,
        attributes: {
          ...dataImage[0],
        },
      },
    };
    // Dispatch an action to set the data in the store
    yield put({ type: "CREATE_PRODUCT_SUCCESS", payload: result });
    action.data.handleCloseModal();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* deleteProduct(action) {
  try {
    // Simulate an API call
    const response = yield fetch(
      `https://cms-vietswiss-staging.absolutagentur.ch/api/projects/${action.id}`,
      {
        method: "DELETE",
      }
    );
    const data = yield response.json();
    // Dispatch an action to set the data in the store
    yield put({ type: "DELETE_PRODUCT_SUCCESS", payload: data.data.id });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* updateProduct(action) {
  try {
    const idPrj = action.data.data.id;
    let dataImage;
    // Kiểm tra xem có fileImage để tải lên hay không
    if (action.data.editedPost.fileImage) {
      const responseUploadImage = yield fetch(
        `https://cms-vietswiss-staging.absolutagentur.ch/api/upload`,
        {
          method: "POST",
          body: action.data.editedPost.fileImage,
        }
      );

      dataImage = yield responseUploadImage.json();
    } else {
      // Nếu không có fileImage, đặt dataImage thành một mảng trống
      dataImage = [];
    }

    const response = yield fetch(
      `https://cms-vietswiss-staging.absolutagentur.ch/api/projects/${idPrj}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: action.data.editedPost.name,
            description: action.data.editedPost.description,
            ...(dataImage.length > 0
              ? {
                  image: {
                    id: dataImage[0].id,
                  },
                }
              : {}),

            relation: 2,
            relations: [2, 4],
          },
        }),
      }
    );
    const data = yield response.json();
    console.log(data);
    const result = {
      ...data.data,
    };

    if (dataImage.length > 0) {
      result.attributes.image = {
        data: { id: dataImage[0].id, attributes: dataImage[0] },
      };
    }

    // Dispatch một action để đặt dữ liệu vào store
    yield put({ type: "UPDATE_PRODUCT_SUCCESS", payload: result });
    action.data.handleCloseModal();
  } catch (error) {
    console.error("Lỗi khi truy xuất dữ liệu:", error);
  }
}

function* watchFetchData() {
  yield takeLatest("GET_DATA", fetchData);
  yield takeLatest("UPDATE_PRODUCT", updateProduct);
  yield takeLatest("CREATE_PRODUCT", createProduct);
  yield takeLatest("DELETE_PRODUCT", deleteProduct);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
