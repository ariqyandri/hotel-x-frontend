import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appDoneLoading, appLoading, setMessage } from "../appState/actions";

const displayCategories = (categories) => {
  return {
    type: "DISPLAY_CATEGORIES",
    payload: categories,
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/categories`);
      dispatch(displayCategories(response.data));
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
