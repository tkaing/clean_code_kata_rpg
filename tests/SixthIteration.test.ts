import { expect } from 'chai';
import Faction from "../src/Faction";
import Character from "../src/Character";

describe('sixth_iteration', function() {

    const faction1 = new Faction("faction1");
    const faction2 = new Faction("faction2");
    const faction3 = new Faction("faction3");

    it('friends_allies_faction1_faction2', function() {
        faction1.addAlly(faction2);
        expect(faction1.isAlly(faction2)).equal(true);
        expect(faction2.isAlly(faction1)).equal(true);
    });

    it('enemies_allies_faction1_faction2_vs_faction3', function() {
        expect(faction1.isAlly(faction3)).equal(false);
        expect(faction2.isAlly(faction3)).equal(false);
    });

    const character1 = new Character("character1");
    const character2 = new Character("character2");

    character1.join(faction1);
    character1.join(faction2);
    character2.join(faction2);

    const character3 = new Character("character3");

    character3.join(faction3);

    it('friends_damage_character1_character2', function() {
        character1.attack(character2);
        expect(character2.health).equal(100);
    });

    it('enemies_damage_character1_character3', function() {
        character1.attack(character3);
        expect(character3.health).equal(99);
    });

    it('friends_heal_character1_character2', function() {
        character1.heal(character2);
        expect(character2.health).equal(101);
    });

    it('enemies_heal_character1_character3', function() {
        character1.heal(character3);
        expect(character3.health).equal(99);
    });
});