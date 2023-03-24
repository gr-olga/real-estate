import type {AxiosResponse} from "axios";
import axios from "axios";
import type {HouseType} from "@/models/HouseType";
import type {NewHouseType} from "@/models/NewHouseType";
import {store} from "@/store";

const url = 'https://api.intern.d-tt.nl/api';
const apiKey = 'N9d31-u7ge5P0iFyoJtfGUvpOWKsw_xC'
const config = {headers: {'X-Api-Key': apiKey}}

export function getHouses(): Promise<AxiosResponse<ReadonlyArray<HouseType>>> {
    return axios.get(`${url}/houses`, config);
}

export async function getHouse(id: string): Promise<HouseType | undefined> {
    const res = await getHouses();
    store.commit('setHouses', res.data);
    return store.state.houses.find((house) => String(house.id) === id)
}

export function createHouse(data: NewHouseType): Promise<AxiosResponse<HouseType>> {
    return axios
        .post(`${url}/houses`, data, config)
        .then((res: AxiosResponse<HouseType>) => {
            store.commit('setHouse', res.data)
            return res;
        })
}

export function addHouseImage(houseId: number, image: string): Promise<AxiosResponse<void>> {
    return axios.post(`${url}/houses/${houseId}/upload`, {image}, config);
}

export function editHouse(houseId: number, data: NewHouseType): Promise<AxiosResponse<HouseType>> {
    return axios.post(`${url}/houses/${houseId}`, data, config);
}

export function deleteHouse(houseId: number): Promise<AxiosResponse<HouseType>> {
    return axios.delete(`${url}/houses/${houseId}`, config);
}