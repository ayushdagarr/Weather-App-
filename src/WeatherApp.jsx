import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox.jsx";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feelsLike: 13.52,
        humidity: 77,
        temp: 14.05,
        tempMax: 14.05,
        tempMin: 14.05,
        weather: "fog",
    });

    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}