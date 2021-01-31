import { GET_WEATHER_DATA_SUCCESS,} from "../action/types";

const weatherInitialState = {
    weatherData:[]
};      

const weatherReducer = (state = weatherInitialState, action ) =>{
    switch(action.type){
        case GET_WEATHER_DATA_SUCCESS:
            return { ...state, weatherData : action.payload};
        default:
            return state;
    }
}

export default weatherReducer;