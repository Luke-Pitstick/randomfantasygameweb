import Spell from '../../baseComponents/Spell';
import Element from '../../gameTypes/Element';
import Rarity from '../../gameTypes/Rarity';

class DebuffSpell extends Spell {
    damage: number;
    constructor(name: string, description: string, element: Element, manaCost: number, rarity: Rarity: number) {
        super(name, description, element, manaCost, rarity);
        this.damage = damage;
    }
}

export default DebuffSpell;