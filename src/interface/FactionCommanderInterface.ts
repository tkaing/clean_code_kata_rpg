import Faction from "../Faction";

export default interface FactionCommanderInterface {
    addAlly(faction: Faction);
    removeAlly(faction: Faction);
}