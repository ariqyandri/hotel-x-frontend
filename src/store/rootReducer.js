import { combineReducers } from "redux";
import appState from "./appState/reducer";
import categories from "./categories/reducer";

const reducer = combineReducers({
  appState,
  categories,
});

export default reducer;
