import axios from "axios";
import type {AxiosResponse} from "axios";
import type {HouseType} from "@/models/HouseType";

const url = 'https://api.intern.d-tt.nl/api';
const apiKey = 'iF_fYVo57x819kDR6vZAzj-XtsJmgeCU'

export function getHouses(): Promise<AxiosResponse<ReadonlyArray<HouseType>>> {
    return axios.get(`${url}/houses`, {
        headers: {'X-Api-Key': apiKey}
    });
}

