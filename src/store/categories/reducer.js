const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_CATEGORIES":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
