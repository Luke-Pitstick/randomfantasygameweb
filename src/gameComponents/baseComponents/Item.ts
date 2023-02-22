import ItemType from '../gameTypes/ItemType';
import Rarity from '../gameTypes/Rarity';

class Item {
    name: string;
    description: string;
    price: number;
    weight: number;
    type: ItemType;
    rarity: Rarity;
    id: number;
    
    public constructor(name: string, price: number, description: string, weight: number, type: ItemType, rarity: Rarity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.weight = weight;
        this.type = type;
        this.rarity = rarity;
        this.id = Math.floor(Math.random() * 1000000);
    }

    public toString() {
        return `Name: ${this.name}, Price: ${this.price}, Description: ${this.description}, Weight: ${this.weight}, Type: ${this.type}, Rarity: ${this.rarity}, ID: ${this.id}}`
    }

}


export default Item;