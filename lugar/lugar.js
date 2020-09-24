const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=2492029a5069361a86d49ce9e1ca1d11`
    });
    const resp = await instance.get();

    if (resp.data.cod === 404) {
        throw new Error(`Ciudad: ${direccion} No encontrada`);
    }

    const coordenadas = resp.data.coord;
    const lat = coordenadas.lat;
    const lng = coordenadas.lon;
    const pais = resp.data.sys.country;
    return {
        pais,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}