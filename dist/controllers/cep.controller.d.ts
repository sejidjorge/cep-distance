import { AddressTypes } from '../types/types';
export declare function getAddressByCepCep(cep: string): Promise<any>;
export declare function getPayload(address: AddressTypes): Promise<string>;
export declare function getDistanceCeps(cep1: string, cep2: string, measurement: "" | "M" | "KM"): Promise<string>;
