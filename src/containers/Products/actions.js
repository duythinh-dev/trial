export const fetchData = () => ({
  type: "GET_DATA",
});

export const editProduct = (data) => ({
  type: "UPDATE_PRODUCT",
  data,
});

export const editProductSuccess = (data) => ({
  type: "UPDATE_PRODUCT_SUCCESS",
  data,
});

export const createProduct = (data) => ({
  type: "CREATE_PRODUCT",
  data,
});

export const createProductSuccess = (data) => ({
  type: "CREATE_PRODUCT_SUCCESS",
  data,
});

export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  id,
});

export const deleteProductSuccess = (data) => ({
  type: "DELETE_PRODUCT_SUCCESS",
  data,
});
