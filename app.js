const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

//argv.descripcion


// lugar.getLugarLatlng(argv.direccion)
//     .then(console.log)


// clima.getClima(40.42, -3.7)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatlng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.dir} es de ${temp}`;

    } catch (e) {
        return `no se puede determinar el clima de ${ direccion } `;
    }
    //salida
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);