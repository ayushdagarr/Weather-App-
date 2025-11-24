import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ca0f6404949ee38337fe392afbc04bc1";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
        
    }


    let handleChange=(event)=>{
        setcity(event.target.value);
    }

    let handlesubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
        }catch(err){
            seterror(true);
        }
    }

    return(
    <div className='Searchbox'>
        <form onSubmit={handlesubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error&&<p style={{color:"red"}}>No such place exists!</p>}
        </form>
    </div>
    )
}




