import { expect } from 'chai';
import Character from '../src/Character';
import Warrior from "../src/Warrior";
import Priest from "../src/Priest";

describe('third_iteration', function() {

    let priest1 = new Priest("titi");
    let priest2 = new Priest("toto");

    it('heal_itself', function() {
        priest1.heal(priest1);
        expect(priest1.health).equal(100);
    });
    it('heal_other_character', function() {
        priest1.heal(priest2);
        expect(priest2.health).equal(100);
    });
    it('attack_itself', function() {
        priest1.attack(priest1);
        expect(priest1.health).equal(100);
    });
    it('attack_other_character', function() {
        priest1.attack(priest2);
        expect(priest2.health).equal(100);
    });
});