import Spell from '../../baseComponents/Spell';
import Element from '../../gameTypes/Element';
import Rarity from '../../gameTypes/Rarity';
import Buff from '../../gameTypes/Buff';

class BuffSpell extends Spell {
    buff: Buff
    constructor(name: string, description: string, element: Element, manaCost: number, rarity: Rarity, buff: Buff) {
        super(name, description, element, manaCost, rarity);
        this.buff = buff;
    }
}

export default BuffSpell;