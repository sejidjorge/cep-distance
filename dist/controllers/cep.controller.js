"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceCeps = exports.getAddressByCepCep = void 0;
const calc_service_1 = require("../services/calc.service");
const https_service_1 = require("../services/https.service");
const address_controler_1 = require("./address.controler");
function getAddressByCepCep(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, https_service_1.HttpsRequest)({
            type: 'cep',
            payload: cep
        });
    });
}
exports.getAddressByCepCep = getAddressByCepCep;
function getDistanceCeps(cep1, cep2, measurement) {
    return __awaiter(this, void 0, void 0, function* () {
        const address1 = yield getAddressByCepCep(cep1);
        const address2 = yield getAddressByCepCep(cep2);
        const encodeAddress1 = `${address1.street.replaceAll(' ', '+')}%2C+${address1.neighborhood.replaceAll(' ', '+')}%2C+${address1.city.replaceAll(' ', '+')}+-+${address1.state.replaceAll(' ', '+')}%2C+Brazil`;
        const encodeAddress2 = `${address2.street.replaceAll(' ', '+')}%2C+${address2.neighborhood.replaceAll(' ', '+')}%2C+${address2.city.replaceAll(' ', '+')}+-+${address2.state.replaceAll(' ', '+')}%2C+Brazil`;
        const latLon1 = yield (0, address_controler_1.getLatLonByAddress)(encodeAddress1);
        const latLon2 = yield (0, address_controler_1.getLatLonByAddress)(encodeAddress2);
        const distance = yield (0, calc_service_1.calcService)({
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
    });
}
exports.getDistanceCeps = getDistanceCeps;
