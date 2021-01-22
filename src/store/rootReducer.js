import { combineReducers } from "redux";
import appState from "./appState/reducer";
import categories from "./categories/reducer";
import about from "./about/reducer";
import contacts from "./contacts/reducer";
import attractions from "./attractions/reducer";
import facilities from "./facilities/reducer";
import rooms from "./rooms/reducer";

const reducer = combineReducers({
  appState,
  categories,
  about,
  contacts,
  attractions,
  facilities,
  rooms,
});

export default reducer;
