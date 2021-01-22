import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appDoneLoading, appLoading, setMessage } from "../appState/actions";

export const displayFacilities = (facilities) => {
  return {
    type: "DISPLAY_FACILITIES",
    payload: facilities,
  };
};

export const fetchFacilities = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/facilities`);
      dispatch(displayFacilities(response.data));
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
