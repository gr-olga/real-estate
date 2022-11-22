import {createStore} from 'vuex'
import type {HouseType} from "@/models/HouseType";

interface StateType {
    houses: ReadonlyArray<HouseType>
    isPopupOpen: boolean
    id: string
}

export const store = createStore({
    state(): StateType {
        return {
            houses: [],
            isPopupOpen: false,
            id: ""
        }
    },
    mutations: {
        setHouses(state, houses) {
            state.houses = [...houses];
        },
        setHouse(state, house) {
            state.houses = [...state.houses, house];
        },
        setTogglePopup(state) {
            state.isPopupOpen = !state.isPopupOpen
        },
        setId(state, payload) {
            state.id = payload
        }
    }
})
