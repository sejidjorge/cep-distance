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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpsRequest = void 0;
const axios_1 = __importDefault(require("axios"));
function HttpsRequest(request) {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default.get(yield handleParams(request))
            .then(response => response.data);
    });
}
exports.HttpsRequest = HttpsRequest;
function handleParams(_a) {
    return __awaiter(this, arguments, void 0, function* ({ type, payload }) {
        switch (type) {
            case "cep":
                return `https://brasilapi.com.br/api/cep/v2/${payload}/`;
            case "address":
                return `https://nominatim.openstreetmap.org/search.php?q=${payload}&accept-language=pt-br&format=jsonv2`;
            default:
                return "Invalid type";
        }
    });
}
