import { HttpsRequest } from '../services/https.service';
import { handleParamsTypes } from '../types/types';

export async function HttpsController(request: handleParamsTypes) {
    return await HttpsRequest(request);
}