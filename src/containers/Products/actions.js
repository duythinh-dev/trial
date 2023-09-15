export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const editProduct = (data) => ({
  type: "UPDATE_PRODUCT",
  data,
});

export const editProductSuccess = (data) => ({
  type: "UPDATE_PRODUCT_SUCCESS",
  data,
});
