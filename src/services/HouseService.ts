import axios from "axios";
import type {AxiosResponse} from "axios";
import type {HouseType} from "@/models/HouseType";
import type {NewHouseType} from "@/models/NewHouseType";
import {store} from "@/store";

const url = 'https://api.intern.d-tt.nl/api';
const apiKey = 'iF_fYVo57x819kDR6vZAzj-XtsJmgeCU'

export function getHouses(): Promise<AxiosResponse<ReadonlyArray<HouseType>>> {
    return axios.get(`${url}/houses`, {
        headers: {'X-Api-Key': apiKey}
    });
}

export function createHouse(data: NewHouseType): Promise<AxiosResponse<HouseType>> {
    return axios
        .post(`${url}/houses`, data, {
            headers: {'X-Api-Key': apiKey}
        })
        .then((res: AxiosResponse<HouseType>) => {
            store.commit('setHouse', res.data)
            return res;
        })
}

export function addHouseImage(houseId: string, image: string): Promise<AxiosResponse<void>> {
    return axios.post(`${url}/houses/${houseId}/upload`, {image}, {
        headers: {'X-Api-Key': apiKey}
    });
}

export function editHouse(houseId: string, data: NewHouseType): Promise<AxiosResponse<HouseType>> {
    return axios.post(`${url}/${houseId}`, data, {
        headers: {'X-Api-Key': apiKey}
    });
}