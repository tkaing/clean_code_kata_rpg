import { expect } from 'chai';
import Character from '../src/Character';
import Faction from "../src/Faction";

describe('fourth_iteration', function() {

    const faction = new Faction("faction");
    const character = new Character("character");

    const faction1 = new Faction("faction1");
    const character1 = new Character("character1");
    const character2 = new Character("character2");

    const faction2 = new Faction("faction2");
    const character3 = new Character("character3");
    const character4 = new Character("character4");

    it('should_have_name', function() {
        expect(faction.name)
            .to.not.equal(null)
            .to.not.equal(undefined);
    });
    it('join_a_faction', function() {
        character.join(faction);
        expect(character.containsFaction(faction)).equal(true);
    });
    it('leave_a_faction', function() {
        character1.leave(faction);
        expect(character1.containsFaction(faction)).equal(false);
    });

    character1.join(faction1);
    character2.join(faction1);
    character3.join(faction2);
    character4.join(faction2);

    it('attack_other_character_same_faction', function() {
        character1.attack(character2);
        expect(character2.health).equal(100);
    });
    it('attack_other_character_other_faction', function() {
        character1.attack(character3);
        expect(character3.health).equal(99);
    });
    it('heal_other_character_same_faction', function() {
        character2.heal(character1);
        expect(character1.health).equal(101);
    });
    it('heal_other_character_other_faction', function() {
        character2.heal(character4);
        expect(character4.health).equal(100);
    });
});