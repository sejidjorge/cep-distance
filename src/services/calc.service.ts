import { calcParamsTypes } from '../types/types';

export async function calcService({ lat1, lat2, lon1, lon2 }: calcParamsTypes) {
    const R = 6371e3;

    const radLat1 = lat1 * Math.PI / 180;
    const radLon1 = lon1 * Math.PI / 180;

    const radLat2 = lat2 * Math.PI / 180;
    const radLon2 = lon2 * Math.PI / 180;

    const dLat = radLat2 - radLat1;
    const dLon = radLon2 - radLon1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(radLat1) * Math.cos(radLat2) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}