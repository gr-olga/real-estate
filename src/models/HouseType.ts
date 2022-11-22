export interface HouseType {
    readonly constructionYear: number,
    readonly createdAt: string,
    readonly description: string,
    readonly hasGarage: boolean,
    readonly id: number,
    readonly image: string,
    readonly location: LocationType,
    readonly madeByMe: boolean,
    readonly price: number,
    readonly rooms: RoomType,
    readonly size: number
}

export interface LocationType {
    readonly street: string,
    readonly city: string,
    readonly zip: string
}

export interface RoomType {
    readonly bedrooms: number,
    readonly bathrooms: number,
}