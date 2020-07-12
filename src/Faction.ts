import FactionQueryInterface from "./interface/FactionQueryInterface";
import FactionCommanderInterface from "./interface/FactionCommanderInterface";

export default class Faction
    implements
        FactionQueryInterface,
        FactionCommanderInterface {

    private _name: string;
    private _factionAllies: Faction[];

    constructor(name: string) {
        this._name = name;
        this._factionAllies = [];
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    isAlly(faction: Faction): boolean {
        return this._factionAllies.indexOf(faction) > -1;
    }

    addAlly(faction: Faction) {
        if (!this.isAlly(faction))
            this._factionAllies.push(faction);
        if (!faction.isAlly(this))
            faction.addAlly(this);
    }

    removeAlly(faction: Faction) {
        const index = this._factionAllies.indexOf(faction);
        if (this.isAlly(faction)) {
            this._factionAllies.splice(index, 1);
        }
    }
}