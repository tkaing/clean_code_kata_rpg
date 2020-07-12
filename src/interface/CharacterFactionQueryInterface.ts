import Character from "../Character";
import Faction from "../Faction";

export default interface CharacterFactionQueryInterface {
    hasFaction();
    isAllyFaction(character: Character);
    containsFaction(faction: Faction);
}