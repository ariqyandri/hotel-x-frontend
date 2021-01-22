const initialState = [];

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_CONTACTS":
      return [...state, ...payload];
    default:
      return state;
  }
};

export default contactReducer;
