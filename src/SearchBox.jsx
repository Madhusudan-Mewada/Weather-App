import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "b0c41e21a82361d0ea712dff415770ba";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async() => {
      let res =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jasonRes = await res.json();
      try {
        let result = {
          city : city,
          temp : jasonRes.main.temp,
          tempMin : jasonRes.main.temp_min,
          tempMax : jasonRes.main.temp_max,
          humidity : jasonRes.main.humidity,
          feelsLike : jasonRes.main.feels_like,
          wether : jasonRes.weather[0].description
        };
  
        console.log(result);
        return result;
      } catch(err) {
        throw err;
      }
      
    }

    let handleChange = (event) => {
       setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
      try {
        event.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      } catch(err) {
        setError(true);
      }
       
    }

    return(
        <div className='searchBox'>

          <form onSubmit={handleSubmit}>
            <TextField id="city" 
             label="City Name" 
             variant="outlined" 
             required 
             value={city}
             onChange={handleChange}
             />
             <br /> <br />

            <Button variant="contained" type='submit'>
             Search
            </Button>

          </form>
          {error && <p style={{color : "red"}}>Such place is not exist</p>
          }{error = false}
           
        </div>
    )
}