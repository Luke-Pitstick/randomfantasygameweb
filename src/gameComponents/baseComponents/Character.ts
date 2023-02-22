import Item from "./Item";
import Inventory from "./Inventory";
import Weapon from "../baseItems/Weapon";
import Armor from "../baseItems/Armor";
import Spell from "./Spell";
import AttackSpell from "../baseItems/spells/AttackSpell";
import Staff from "../baseItems/Staff";
import Class from "../gameTypes/Class";


class Character {
    name: string;
    inventory: Inventory;
    currentHealth: number;
    currentMana: number;
    maxHealth: number;
    maxMana: number;
    equippedWeapon: Weapon;
    equippedArmor: Armor;
    class: Class

    public constructor(name: string, classType: Class, maxHealth: number, maxMana: number, equippedWeapon: Weapon, equippedArmor: Armor, inventorySize: number) {
        this.name = name;
        this.class = classType;
        this.inventory = new Inventory(inventorySize);
        this.currentHealth = maxHealth;
        this.currentMana = maxMana;
        this.maxHealth = maxHealth;
        this.maxMana = maxMana;
        this.equippedWeapon = equippedWeapon;
        this.equippedArmor = equippedArmor;
        
        this.inventory.addItem(equippedWeapon);
        this.inventory.addItem(equippedArmor);
    }
    public castSpell(target: Character) {
        if (this.equippedWeapon instanceof Staff) {
            let elementModifier = 1;
            let modifier = this.equippedWeapon.modifier;
            const spell = this.equippedWeapon.currentSpell;
            if (spell instanceof AttackSpell) {
                if (spell.element === this.equippedWeapon.element) {
                    elementModifier = 1.5;
                }
                target.currentHealth -= spell.damage * elementModifier * modifier;
            }
        }
        else {
            throw new Error("You cannot cast spells without a staff");
        }

    }
}

export default Character;