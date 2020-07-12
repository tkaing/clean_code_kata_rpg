import { expect } from 'chai';
import Character from '../src/Character';

describe('first_iteration', function() {

    let character = new Character("titi");

    it('should_have_name', function() {
        expect(character.name)
            .to.not.equal(null)
            .to.not.equal(undefined);
    });
    it('should_have_health', function() {
        expect(character.health)
            .to.not.equal(null)
            .to.not.equal(undefined);
    });
    it('initialize_health_to_100', function() {
        expect(character.health).equal(100);
    });
    it('is_alive', function() {
        expect(character.isAlive()).equal(true);
    });
    it('is_not_alive', function() {
        character.health = 0;
        expect(character.isAlive()).not.equal(true);
    });

    let character2 = new Character("titi");
    let character3 = new Character("titi");

    it('attack_itself', function() {
        character2.attack(character2);
        expect(character2.health).equal(100);
    });
    it('attack_other_character', function() {
        character2.attack(character3);
        character2.attack(character3);
        expect(character3.health).equal(98);
    });
    it('heal_itself', function() {
        character2.heal(character2);
        expect(character2.health).equal(101);
    });
    it('heal_other_character', function() {
        character2.heal(character3);
        expect(character3.health).equal(98);
    });
});