import Item from '../baseComponents/Item';
import ItemType from '../gameTypes/ItemType';
import Rarity from '../gameTypes/Rarity';

class Armor extends Item {
    defense: number;
    durability: number;
    magic: boolean;

    constructor(name: string, price: number, description: string, weight: number, rarity: Rarity, attack: number, defense: number, durability: number, magic: boolean) {
        super(name, price, description, weight, ItemType.ARMOR, rarity);
        this.defense = defense;
        this.magic = magic;
        if (durability > 100) {
            throw new Error('Durability cannot be greater than 100');
        }
        this.durability = durability;
    }
}

export default Armor;