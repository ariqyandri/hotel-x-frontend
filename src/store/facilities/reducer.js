const initialState = [];

const facilitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_FACILITIES":
      return [...state, ...payload];
    default:
      return state;
  }
};

export default facilitiesReducer;
