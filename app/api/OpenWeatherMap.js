import axios from 'axios';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e19223d9fc48ac76b6d5e040c542045f&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message) {
                throw new Error (res.data.message)
            } else {
                return res.data.main.temp
            }
        }, function(error){
            throw new Error(error.response.data.message)
        })
    }
}