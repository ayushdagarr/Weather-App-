import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1491824989090-cc2d0b57eb0d?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://wallpaperaccess.com/full/1535252.jpg";
    const HOT_URL="https://media.istockphoto.com/photos/thermometer-standing-in-the-sand-at-the-beach-in-very-hot-weather-picture-id1192081488?b=1&k=20&m=1192081488&s=170667a&w=0&h=hC_t2EF8Hh_E-w5df5lsXyWRQawerrL1GPM0L8gLIIg=";
    const RAIN_URL="https://i.pinimg.com/originals/a6/0c/1d/a60c1d11d63409b5764babf64a9646c5.jpg";
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL:info.temp>15? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80? <ThunderstormIcon/>:info.temp>15? <WbSunnyIcon/>:<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The Weather can be described as <i>{info.weather}</i> and feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}