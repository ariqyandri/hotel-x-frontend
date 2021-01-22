import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appDoneLoading, appLoading, setMessage } from "../appState/actions";

export const displayAttractions = (attractions) => {
  return {
    type: "DISPLAY_ATTRACTIONS",
    payload: attractions,
  };
};

export const fetchAttractions = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/attractions`);
      console.log(response.data);
      dispatch(displayAttractions(response.data));
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
