import React from "react";
import {MDBCol,MDBCard,MDBCardBody,MDBCardTitle, MDBRow,MDBIcon} from "mdbreact";
import WeatherIcon from 'react-icons-weather';



const Card = (props) => {
       let lUpdate = new Date(props.data.dt * 1000);
       let today = new Date();
       let updateString = lUpdate.getDate()+"/"+(lUpdate.getMonth()+1)+"/"+(lUpdate.getYear()+1900)
                        +" "+lUpdate.getHours()+":"+lUpdate.getMinutes()+":"+lUpdate.getSeconds()
       let differentString  = "( "+(today.getDate()-lUpdate.getDate())+" day," +(today.getHours()-lUpdate.getHours())+" hours and "+(today.getMinutes()-lUpdate.getMinutes())+" minutes ago)"  
       return(
        <MDBCol xl="3" md="6" className="mb-r pt-2">
            <MDBCard className="cascading-admin-card  " >
            <MDBCardBody>
                <MDBCardTitle className="text-left">{props.data.name}</MDBCardTitle>
                <p className="font-weight-normal text-left" >{props.data.weather[0].description}</p>
                <MDBRow>
                    <MDBCol sm="4">
                        <WeatherIcon  name="owm" iconId="200" flip="horizontal" rotate="90" />
                    </MDBCol>
                    <MDBCol sm="8">
                        <h2  >{props.data.main.temp}<span>&#8451;</span></h2>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <p className="font-weight-normal text-right pr-1" style={{fontSize:"12px"}}>ID: {props.data.id}</p>
            <div className='rounded-bottom mdb-color info-color text-left pt-1 pl-1'>
                <p style={{fontSize:"12px"}}><MDBIcon far icon='clock' /> Last Update : {updateString} {differentString}</p>
            </div>
            </MDBCard>
      </MDBCol>

    );
}

export default Card;