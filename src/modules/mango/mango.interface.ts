// name, iamge, variety, price, stock, origin, seasion

export interface IMango {
    name: string,
    variety: string,
    unit: "KG" | "TON",
    price: number,
    stock: number,
    origin: string,
    seasion: "Summer" | "Winter"
};
