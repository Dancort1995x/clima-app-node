const axios = require('axios');

const getLugarLatlng = async(direccion) => {
    //para crear los espacios necesario y modificacion de letras adaptadas
    const encodeUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ encodeUlr }&appid=634a5df4460c8c47f6e65cbcaa23ef4f`,
    });


    const resp = await instance.get();

    if (resp.data.coord.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const dir = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;


    return {
        dir,
        lat,
        lng

    }
}

module.exports = {
    getLugarLatlng
}