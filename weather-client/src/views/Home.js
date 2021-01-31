import React, { useEffect,useState} from "react";
import Card from "../shared/card";
import { connect } from "react-redux";
import { MDBContainer, MDBRow } from "mdbreact";
import { getWeatherData } from "../action/weather.action";
import Loader from 'react-loader-spinner'
import { Bar } from "react-chartjs-2";

const Home =(props) =>{
    
    useEffect(() => {
        props.onGetWeatherData();
        if(props.weather.length !== 0){
          console.log()
        }
      }, []);

    if(props.weather.length===0){
      return(
        <Loader
          type="Puff"
          color="#4285F4"
          height={100}
          width={100}
        />
      )
    }else{
      return(
        <div>
            <MDBContainer>
                <MDBRow className="mb-4 mt-4" center>
                {props.weather.map((values)=>{
                  return <Card data={values}></Card>
                })}
                </MDBRow>
                <hr></hr>
            </MDBContainer>
        </div>
      )
    }
        
}

const mapStateToProps = (state) => {
    return {
      weather: state.weatherData.weatherData || [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onGetWeatherData: () => {
        dispatch(getWeatherData());
      },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);