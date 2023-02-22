import Element from '../gameTypes/Element';
import Rarity from '../gameTypes/Rarity';

class Spell {
    name: string;
    description: string;
    element: Element;
    manaCost: number;
    rarity: Rarity;
    id: number;

    constructor(name: string, description: string, element: Element, manaCost: number, rarity: Rarity) {
        this.name = name;
        this.description = description;
        this.element = element;
        this.manaCost = manaCost;
        this.rarity = rarity;
        this.id = Math.floor(Math.random() * 1000000);
    }
}

export default Spell;