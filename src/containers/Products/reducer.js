const initialState = {
  data: [],
  flags: {
    updating: false,
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload.data };
    case "UPDATE_PRODUCT":
      return { ...state, flags: { updating: true } };
    case "UPDATE_PRODUCT_SUCCESS":
      return { ...state, flags: { updating: false } };
    default:
      return state;
  }
};

export default dataReducer;
