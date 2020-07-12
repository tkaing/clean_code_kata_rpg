import Character from "../Character";

export default interface CharacterQueryInterface {
    isAlive() : boolean;
    canHeal(character: Character) : boolean;
    canAttack(character: Character) : boolean;
}