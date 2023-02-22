import Item from "../baseComponents/Item";
import ItemType from "../gameTypes/ItemType";
import Rarity from "../gameTypes/Rarity";
import Element from "../gameTypes/Element";
import Spell from "../baseComponents/Spell";

class Staff extends Item {
  spellSlots: number;
  element: Element;
  spellSlotsUsed: number;
  currentSpell: Spell;
  spellBook: Spell[];
  modifier: number;

  constructor(
    name: string,
    price: number,
    description: string,
    weight: number,
    rarity: Rarity,
    element: Element,
    initialSpell: Spell,
    spellSlots: number,
  ) {
    super(name, price, description, weight, ItemType.STAFF, rarity);
    if (spellSlots > 6) {
      throw new Error("Staffs cannot have more than 6 spell slots");
    }
    this.spellSlots = spellSlots - 1;
    this.element = element;
    this.spellSlotsUsed = 1;
    this.spellBook = [];
    this.currentSpell = initialSpell;
    this.modifier = 1.2;
  }

  addSpell(spell: Spell) {
    if (this.spellSlotsUsed === this.spellSlots) {
      throw new Error("Staff is full of spells");
    }
    this.spellBook.push(spell);
    this.spellSlotsUsed++;
  }

  removeSpell(spell: Spell) {
    if (this.spellSlotsUsed === 0) {
      throw new Error("Staff is empty");
    }
    const index = this.spellBook.indexOf(spell);
    this.spellBook.splice(index, 1);
    this.spellSlotsUsed--;
  }

  setCurrentSpell(index: number) {
    if (this.spellBook[index] === undefined) {
      throw new Error("Spell does not exist");
    }
    this.currentSpell = this.spellBook[index];
  }
}

export default Staff;
