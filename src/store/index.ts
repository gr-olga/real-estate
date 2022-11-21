import {createStore} from 'vuex'
import type {HouseType} from "@/models/HouseType";

interface StateType {
    houses: ReadonlyArray<HouseType>
}

export const store = createStore({
    state(): StateType {
        return {
            houses: []
        }
    },
    mutations: {
        setHouses(state, houses) {
            state.houses = [...houses];
        },
        setHouse(state, house) {
            state.houses = [...state.houses, house];
        }
    }
})
