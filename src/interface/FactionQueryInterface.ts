import Faction from "../Faction";

export default interface FactionQueryInterface {
    isAlly(faction: Faction) : boolean;
}