import {createStore} from 'vuex'
import type {HouseType} from "@/models/HouseType";

interface StateType {
    houses: ReadonlyArray<HouseType>
}

//todo not sure if I really need vuex
export const store = createStore({
    state(): StateType {
        return {
            houses: []
        }
    },
    mutations: {
        setHouses(state, houses) {
            console.log(111, houses);
            state.houses = [...houses];
        },
        setHouse(state, house) {
            state.houses = [...state.houses, house];
        }
    }
})
