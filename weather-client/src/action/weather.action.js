import { GET_WEATHER_DATA_SUCCESS} from "./types";
import { SERVER_URL, API_ENDPOINT_WEATHER } from "../constant";
import axios from "axios";
import { toast } from "react-toastify";

//get all weather 
  export const getWeatherDataSuccess = (data) => {
    return {
      type: GET_WEATHER_DATA_SUCCESS,
      payload: data,
    };
  };
  
  export const getWeatherData = () => {
    return (dispatch) => {
        return axios.get(`${SERVER_URL}/${API_ENDPOINT_WEATHER}/get-all`)
            .then((response) => {
                dispatch(getWeatherDataSuccess(response.data.list));
            }).catch((error) => {
              console.log(error);
              toast.error(error.message, {
                position: "top-center",
              });
            });
    };
  }