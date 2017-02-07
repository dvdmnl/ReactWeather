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

    componentDidMount () {
        var location = this.props.location.query.location;
        if(location && location.length > 0 ) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    componentWillReceiveProps(newProps){
        var location = newProps.location.query.location;
        if(location && location.length > 0 ) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    handleSearch = (location)=> {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
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
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}

export default Weather;