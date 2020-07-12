import Character from "../Character";

export default interface CharacterCommanderInterface {
    heal(character: Character);
    attack(character: Character);
}