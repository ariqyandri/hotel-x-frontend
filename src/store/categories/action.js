import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appDoneLoading, appLoading, setMessage } from "../appState/actions";
import { displayAbout } from "../about/action";
import { displayContacts } from "../contacts/action";

const displayCategories = (categories) => {
  return {
    type: "DISPLAY_CATEGORIES",
    payload: categories,
  };
};

export const initialFetch = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/categories`);
      dispatch(displayCategories(response.data.categories));
      dispatch(displayAbout(response.data.about[0]));
      dispatch(displayContacts(response.data.contacts));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
