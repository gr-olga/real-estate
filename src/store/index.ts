import {createStore} from 'vuex'
import type {HouseType} from "@/models/HouseType";

interface StateType {
    houses: ReadonlyArray<HouseType>
    isPopupOpen: boolean
    id: number
}

export const store = createStore({
    state(): StateType {
        return {
            houses: [],
            isPopupOpen: false,
            id: null as any
        }
    },
    mutations: {
        setHouses(state: StateType, houses: ReadonlyArray<HouseType>): void {
            state.houses = [...houses];
        },
        setHouse(state: StateType, house: HouseType): void {
            state.houses = [...state.houses, house];
        },
        setTogglePopup(state: StateType): void {
            state.isPopupOpen = !state.isPopupOpen
        },
        setId(state: StateType, payload: number): void {
            state.id = payload
        }
    }
})
