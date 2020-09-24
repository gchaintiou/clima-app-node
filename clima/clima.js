const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2492029a5069361a86d49ce9e1ca1d11&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}