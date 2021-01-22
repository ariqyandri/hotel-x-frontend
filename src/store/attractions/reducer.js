const initialState = [];

const attractionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_ATTRACTIONS":
      return [...state, ...payload];
    default:
      return state;
  }
};

export default attractionsReducer;
