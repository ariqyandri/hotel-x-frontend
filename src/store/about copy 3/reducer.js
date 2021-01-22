const initialState = {};

const aboutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_ABOUT":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default aboutReducer;
