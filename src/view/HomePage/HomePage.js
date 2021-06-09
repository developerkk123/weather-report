import React from 'react'
import './style.css'
class HomePage extends React.Component{
    constructor() {
        super();
        this.state = {
          location: null,
          weather: null,
          scale: 'celsius',
          error: ''
        }
        this.handleGetPosition = this.handleGetPosition.bind(this);
        // this.handleChangeTempScale = this.handleChangeTempScale.bind(this);
        this.weather = {
          Sun: 'sunny',
          Clouds: 'cloudy',
          Snow: 'snow',
          Rain: 'rain',
          Hail: 'hail',
          Fog: 'fog',
          Wind: 'windy',
          Drizzle: 'rain-mix'
        }
      }
      componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.handleGetPosition);
        } else {
            this.setState({error: "Geolocation is not supported by this browser."});
        }
      }
      componentDidUpdate() {
        if (this.state.location && !this.state.weather) {
          fetch(`https://fcc-weather-api.glitch.me/api/current?lon=${this.state.location.longitude}&lat=${this.state.location.latitude}`)
            .then(response => response.json())
            .then(json => {console.log(json); return this.setState({weather: json})});
        }
      }
      handleGetPosition(position) {
        this.setState({location: position.coords});
      }
    //   handleChangeTempScale() {
    //     this.setState({scale: this.state.scale === 'celsius' ? 'farenheit' : 'celsius'})
    //   }
      render() {
        return (
          <div className="home-page">
            <h1>Local weather</h1>
            {this.state.error && <p>{this.state.error}</p>}
            {/* <button onClick={this.handleChangeTempScale}>Switch to {this.state.scale === 'celsius' ? 'farenheit' : 'celsius'}</button> */}
            {this.state.weather &&
            <div className="container">
              <h1>{`${Math.round(this.state.weather.main.temp)} C`}</h1>
              <i className={`wi wi-day-${this.weather[this.state.weather.weather[0].main]}`}></i>
              <p>{this.state.weather.weather[0].description}</p>
              <h2>{this.state.weather.name}</h2>
              <p className="small">Humidity: {this.state.weather.main.humidity}</p>
              <p className="small">Pressure: {this.state.weather.main.pressure}</p>
            </div>}
          </div>
        );
      }
}
export default HomePage;