import React from 'react';

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Welcome to about Weather.</p>
            <p>Her are some tools I used :</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/">React</a> - I used React as a framework
                </li>
                <li>
                    <a href="http://openweatermap.org">OpenWeatherMap.org</a> - I used Open Weather Map As an API to get City weather by a city name
                </li>
            </ul>
        </div>
    )
}

export default About;