import Faction from "../Faction";

export default interface CharacterFactionCommanderInterface {
    join(faction: Faction);
    leave(faction: Faction);
}