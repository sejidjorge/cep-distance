import { calcService } from '../services/calc.service';
import { HttpsRequest } from '../services/https.service';
import { getLatLonByAddress } from './address.controler';

export async function getAddressByCepCep(cep: string) {
    return await HttpsRequest({
        type: 'cep',
        payload: cep
    });
}

export async function getDistanceCeps(cep1: string, cep2: string, measurement: "" | "M" | "KM") {
    const address1 = await getAddressByCepCep(cep1);
    const address2 = await getAddressByCepCep(cep2);

    const encodeAddress1 = `${address1.street.replaceAll(' ', '+')}%2C+${address1.neighborhood.replaceAll(' ', '+')}%2C+${address1.city.replaceAll(' ', '+')}+-+${address1.state.replaceAll(' ', '+')}%2C+Brazil`;
    const encodeAddress2 = `${address2.street.replaceAll(' ', '+')}%2C+${address2.neighborhood.replaceAll(' ', '+')}%2C+${address2.city.replaceAll(' ', '+')}+-+${address2.state.replaceAll(' ', '+')}%2C+Brazil`;

    const latLon1 = await getLatLonByAddress(encodeAddress1);
    const latLon2 = await getLatLonByAddress(encodeAddress2);

    const distance = await calcService({
        lat1: Number(latLon1[0].lat),
        lon1: Number(latLon1[0].lon),
        lat2: Number(latLon2[0].lat),
        lon2: Number(latLon2[0].lon)
    });

    switch (measurement) {
        case "M":
            return distance.toFixed(2);
        case "KM":
            return (distance / 1000).toFixed(2);
        default:
            return distance.toFixed(2);
    }
}
