import https from "https";
import axios from 'axios';
import { handleParamsTypes } from '../types/types';

export async function HttpsRequest(request: handleParamsTypes) {
    return axios.get(await handleParams(request))
        .then(response => response.data);
}

async function handleParams({ type, payload }: handleParamsTypes) {
    switch (type) {
        case "cep":
            return `https://brasilapi.com.br/api/cep/v2/${payload}/`;
        case "address":
            return `https://nominatim.openstreetmap.org/search.php?q=${payload}&accept-language=pt-br&format=jsonv2`;
        default:
            return "Invalid type";
    }
}
