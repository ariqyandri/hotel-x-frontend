import { combineReducers } from "redux";
import appState from "./appState/reducer";
import categories from "./categories/reducer";
import about from "./about/reducer";
import contacts from "./contacts/reducer";

const reducer = combineReducers({
  appState,
  categories,
  about,
  contacts,
});

export default reducer;
