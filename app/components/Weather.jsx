import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/OpenWeatherMap';
import ErrorModal from './ErrorModal';


class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            location:'',
            temp: '',
        }
    };



    handleSearch = (location)=> {
        var that = this;

        this.setState({
            isLoading:true,
            errorMessage:undefined
        })

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading:false,
            });
        },function(e){
            that.setState({
                isLoading:false,
                errorMessage:e.message
            });
        });

    };

    render () {
        const {location, temp, isLoading, errorMessage} = this.state;
        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        }

        function renderError () {
            if(typeof errorMessage === 'string'){
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}

export default Weather;