import { expect } from 'chai';
import Character from '../src/Character';
import Warrior from "../src/Warrior";

describe('second_iteration', function() {

    let warrior1 = new Warrior("titi");
    let warrior2 = new Warrior("toto");

    it('heal_itself', function() {
        warrior1.heal(warrior1);
        expect(warrior1.health).equal(101);
    });
    it('heal_other_character', function() {
        warrior1.heal(warrior2);
        expect(warrior2.health).equal(100);
    });
    it('attack_itself', function() {
        warrior1.attack(warrior1);
        expect(warrior1.health).lessThan(102);
    });
    it('attack_other_character', function() {
        warrior1.attack(warrior2);
        expect(warrior2.health).lessThan(101);
    });

});