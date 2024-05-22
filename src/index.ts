import { getDistanceCeps } from './controllers/cep.controller';

export async function GetDistanceBetweenCeps(cep1: string, cep2: string, measurement: "" | "M" | "KM") {
    return await getDistanceCeps(cep1.replace(/[^0-9]/g, ""), cep2.replace(/[^0-9]/g, ""), measurement);
}

module.exports = GetDistanceBetweenCeps;