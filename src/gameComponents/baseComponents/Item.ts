import ItemType from '../gameTypes/ItemType';

class Item {
    name: string;
    description: string;
    price: number;
    weight: number;
    type: ItemType;
    
    constructor(name: string, price: number, description: string, weight: number, type: ItemType) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.weight = weight;
        this.type = type;
    }
}


export default Item;