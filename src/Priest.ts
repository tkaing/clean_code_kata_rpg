import Character from "./Character";

export default class Priest extends Character {

    heal(character: Character) {
        const healthPoints = Math.floor(Math.random() * (10 - 5 + 1) + 5);
        if (this.canHeal(character))
            character.health += healthPoints;
    }

    attack(character: Character) {
        character.health -= 0;
    }

    canHeal(character: Character): boolean {
        return super.canHeal(character) && character !== this;
    }
}