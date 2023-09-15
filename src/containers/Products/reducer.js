const initialState = {
  data: [],
  flags: {
    updating: false,
    getingProducts: false,
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, flags: { ...state.flags, getingProducts: true } };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
        flags: { ...state.flags, getingProducts: false },
      };
    case "CREATE_PRODUCT":
      return { ...state, flags: { updating: true } };
    case "CREATE_PRODUCT_SUCCESS": {
      const data = [action.payload, ...state.data];
      return { ...state, data, flags: { updating: false } };
    }
    case "UPDATE_PRODUCT":
      return { ...state, flags: { updating: true } };
    case "UPDATE_PRODUCT_SUCCESS": {
      console.log(action);
      const data = [...state.data];
      const indexDataChanged = data.findIndex(
        (e) => e.id === action.payload.id
      );
      data[indexDataChanged].attributes = {
        ...data[indexDataChanged].attributes,
        ...action.payload.attributes,
      };
      return { ...state, data, flags: { updating: false } };
    }
    case "DELETE_PRODUCT":
      return { ...state, flags: { updating: true } };
    case "DELETE_PRODUCT_SUCCESS": {
      console.log(action);
      const data = [...state.data];
      const indexDataChanged = data.findIndex((e) => e.id === action.payload);
      data.splice(indexDataChanged, 1);

      return { ...state, data, flags: { updating: false } };
    }
    default:
      return state;
  }
};

export default dataReducer;
