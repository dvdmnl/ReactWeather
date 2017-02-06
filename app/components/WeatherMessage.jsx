import React from 'react';


var WeatherMessage = ({location, temp}) => {
    return(
        <h3>It's {temp} in {location}.</h3>
    )
}

export default WeatherMessage;