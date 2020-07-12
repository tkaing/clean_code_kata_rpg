import Character from "./Character";

export default class Warrior extends Character {

    heal(character: Character) {
        if (this.canHeal(character))
            character.health += 1;
    }

    attack(character: Character) {
        const damagePoints = Math.floor(Math.random() * (9 + 1));
        if (this.canAttack(character))
            character.health -= damagePoints;
    }

    canHeal(character: Character): boolean {
        return character === this;
    }

    canAttack(character: Character): boolean {
        return super.canAttack(character) || character === this;
    }
}