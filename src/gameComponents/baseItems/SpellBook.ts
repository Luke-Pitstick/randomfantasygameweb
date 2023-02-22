import Rarity from "../gameTypes/Rarity";
import Element from "../gameTypes/Element";
import Spell from "../baseComponents/Spell";
import Staff from "./Staff";

class SpellBook extends Staff {
    constructor(name: string, price: number, description: string, weight: number, rarity: Rarity, element: Element, initialSpell: Spell, spellSlots: number) {
        if (spellSlots > 15) {
            throw new Error("Spellbooks cannot have more than 6 spell slots");
        }
        super(name, price, description, weight, rarity, element, initialSpell, spellSlots);
        this.modifier = 1;
    }
}

export default SpellBook;