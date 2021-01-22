const initialState = [];

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_ROOMS":
      return [...state, ...payload];
    default:
      return state;
  }
};

export default roomsReducer;
