import React from 'react'
import axios from 'axios'
import './Weather.css'
class Weather extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
        current_location: "Bangalore",
        temps: [],
        weather: [],
        index: 0
      };
    }
  
    fetchFromApi = () => {
      const location = encodeURIComponent(this.state.current_location);
      const api = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=868d77c7ff6850c05a5eadea6047a7f4&units=metric`
      console.log("api", api);
  
      axios.get(api).then(response => {
          console.log(response.data, "response data")
        this.setState({
          data: response.data
        });
  
        const currentData = this.currentData();
        
        const currentTemp = Math.round(currentData.main.temp);
        const currentWeather =currentData.weather[0].main === "Clouds"
            ? "Cloudy"
            : currentData.weather[0].main;
        let temps = [];
        let weather = [];
        for (let i = 0; i < this.state.data.list.length; i = i + 8) {
      
          temps.push(Math.round(this.state.data.list[i].main.temp));
          if (this.state.data.list[i].weather[0].main === "Clouds") {
            weather.push("Cloudy");
          } else {
            weather.push(this.state.data.list[i].weather[0].main);
          }
        }
  
        this.setState({
          temps: [currentTemp, ...temps.slice(1)],
          weather: [currentWeather, ...weather.slice(1)]
        });
      });
    };
  
    currentData = () => {
      const list = this.state.data.list;
      const nearestHr = this.computeNearestHr();
  
      return list.find(e => new Date(e.dt_txt).getHours() === nearestHr);
    };
  
    computeNearestHr = () => {
      const currentTimeInHrs = new Date().getHours();
      const constHrs = [0, 3, 6, 9, 12, 15, 18, 21];
      const differences = constHrs.map(e => Math.abs(e - currentTimeInHrs));
      const indexofLowestDiff = differences.indexOf(Math.min(...differences));
  
      return constHrs[indexofLowestDiff];
    };
  
    componentDidMount() {
      this.fetchFromApi();
    }
  
    handleChange = event => {
      event.target.select();
    }
    
    handleChangeLocation = event => {
      event.preventDefault();
      const inputLocation = this.locationInput.value;
      this.setState({
            current_location: inputLocation
        },
        () => {
          this.fetchFromApi();
        }
      );
    };
  
  
  
    render() {
      const { current_location,temps,weather,index} = this.state;
      console.log(index)
      let backgroundAnimation = "";
      switch (weather[index]) {
        case "Clear":
          backgroundAnimation = "clean";
          break;
        case "Cloudy":
          backgroundAnimation = "rain-cloudy";
          break;
        case "Thunderstorm":
          backgroundAnimation = "storm";
          break;
        
        case "Rain":
          backgroundAnimation = "rain";
          break;
        case "Drizzle":
          backgroundAnimation = "rain";
          break;
        case "Snow":
            backgroundAnimation = "snow";
            break;
        default:
          backgroundAnimation = "cloudy";
      }
      return (
        <div className={"widget ".concat(...backgroundAnimation)}>
          <form onSubmit={this.handleChangeLocation}>
            <div className="input-section">
              <i className="mdi mdi-magnify"></i>
              <input
                className="location-input"
                defaultValue={current_location}
                type="text"
                onFocus={this.handleChange}
                ref={input => (this.locationInput = input)}
              />
            </div>
          </form>
  
          <div className="temprature">
            <div className="temprature-info">
              <div className="temp-measurement">{temps[index]}</div>
              <div className="temp-unit">°C</div>
            </div>
  
            <div className="weather-title">
              <div className="sub-info-text">{weather[index]}</div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Weather;
  