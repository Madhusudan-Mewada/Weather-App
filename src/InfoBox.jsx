
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0CYq3MvpWpDmVDx-YiLbapa4WrvHoQVCrw&s";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fqNLjxSQ-tCsTU5PfwqFIJXXFjmaeb9oHA&s";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvGO55_SgF32omU93WH7t-_NdNtOoHpp3HA&s";
    return(
        <div className='infoBox'>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
        title="green iguana"
      />  
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
          {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> )}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p> Tempreture = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p> The Weather can we describe as {info.wether} and feels like {info.feelsLike}&deg;C</p>
        </Typography>
         </CardContent>
        </Card>
        </div>
        
        </div>
    )
}