const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=634a5df4460c8c47f6e65cbcaa23ef4f&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}