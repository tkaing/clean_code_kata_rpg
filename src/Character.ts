import Faction from "./Faction";
import CharacterQueryInterface from "./interface/CharacterQueryInterface";
import CharacterCommanderInterface from "./interface/CharacterCommanderInterface";
import CharacterFactionQueryInterface from "./interface/CharacterFactionQueryInterface";
import CharacterFactionCommanderInterface from "./interface/CharacterFactionCommanderInterface";

export default class Character
    implements
        CharacterQueryInterface,
        CharacterCommanderInterface,
        CharacterFactionQueryInterface,
        CharacterFactionCommanderInterface {

    private _name: string;
    private _health: number;
    private _factions: Faction[];

    constructor(name: string) {
        this._name = name;
        this._health = 100;
        this._factions = [];
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        this._health = value;
    }

    heal(character: Character) {
        if (this.canHeal(character))
            character.health += 1;
    }

    attack(character: Character) {
        if (this.canAttack(character))
            character.health -= 1;
    }

    isAlive() : boolean {
        return this._health > 0;
    }

    canHeal(character: Character): boolean {
        return this.isAllyFaction(character) || character === this;
    }

    canAttack(character: Character): boolean {
        return character.isAlive() && !this.isAllyFaction(character) && character !== this;
    }

    join(faction: Faction) {
        if (!this.containsFaction(faction))
            this._factions.push(faction);
    }

    leave(faction: Faction) {
        const index = this._factions.indexOf(faction);
        if (this.containsFaction(faction))
            this._factions.splice(index, 1);
    }

    hasFaction() {
        return this._factions.length > 0;
    }

    containsFaction(faction: Faction) {
        return this._factions.indexOf(faction) > -1;
    }

    isAllyFaction(character: Character) {
        if (Character.containsSoloCharacters(this, character))
            return false;
        for (let faction of character._factions) {
            if (this.containsFaction(faction))
                return true;
        }
        return false;
    }

    static containsSoloCharacters(characterA: Character, characterB: Character) {
        return !characterA.hasFaction() || !characterB.hasFaction();
    }
}