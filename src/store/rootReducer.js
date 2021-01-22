import { combineReducers } from "redux";
import appState from "./appState/reducer";
import categories from "./categories/reducer";
import about from "./about/reducer";

const reducer = combineReducers({
  appState,
  categories,
  about,
});

export default reducer;
