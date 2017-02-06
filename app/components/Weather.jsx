import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/OpenWeatherMap'


class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            location:'',
            temp: ''
        }
    };

    handleSearch = (location)=> {
        var that = this;
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading:false
            })
        },function(errorMessage){
            that.setState({
                isLoading:false
            })
            alert(errorMessage)
        });

    };

    render () {
        const {location, temp, isLoading} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        }

        return (
            <div>
                <h3>Weather Comp</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
}

export default Weather;