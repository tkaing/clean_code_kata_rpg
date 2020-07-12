import { expect } from 'chai';
import Character from '../src/Character';
import Faction from "../src/Faction";

describe('seventh_iteration', function() {

    const faction1 = new Faction("faction1");
    const faction2 = new Faction("faction2");
    const faction3 = new Faction("faction3");

    const character1 = new Character("character1");
    const character2 = new Character("character2");

    character1.join(faction1);
    character1.join(faction2);
    character1.join(faction3);

    character2.join(faction2);
    character2.join(faction3);

    it('multiple_factions_character1', function() {
        expect(character1.hasFaction()).equal(true);
    });

    it('common_faction_character1_character2', function() {
        expect(character1.isAllyFaction(character2)).equal(true);
    });

});