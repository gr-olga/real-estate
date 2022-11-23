export function isMyItem(houseId: number | string) {
    // Just for the demo, because we have no way to check an owner of the item
    const lastPredefinedItemId: number = 11;
    return Number(houseId) >= lastPredefinedItemId
}