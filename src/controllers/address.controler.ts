import { HttpsRequest } from '../services/https.service';

export async function getLatLonByAddress(addressEncoded: string) {
    return await HttpsRequest({
        type: 'address',
        payload: addressEncoded
    });
}