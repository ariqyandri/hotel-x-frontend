import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appDoneLoading, appLoading, setMessage } from "../appState/actions";

export const displayRooms = (rooms) => {
  return {
    type: "DISPLAY_ROOMS",
    payload: rooms,
  };
};

export const fetchRooms = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/rooms`);
      console.log(response.data);
      dispatch(displayRooms(response.data));
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
