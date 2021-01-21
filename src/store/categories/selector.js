const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_CATEGORIES":
      return { ...state, ...payload };
    default:
      return state;
  }
};
