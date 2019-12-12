const main = require('./fizzbuzz.js');
var assertchai = require('chai').assert;
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();


describe('Given a number verify if it is divisible ', function () {

    it('30 can be divided by 3', async function () {
        var result = await main.numberIsFizz(30);
        assertchai.equal(result, "Fizz", ' should print Fizz ');
    });

    it('55 can be divided by 5', async function () {
        var result = await main.numberIsBuzz(55);
        assertchai.equal(result, "Buzz", ' should print Fizz ');
    });

    it('75 can be divided by 3 and 5', async function () {
        var result = await main.numberIsFizzBuzz(75);
        assertchai.equal(result, "FizzBuzz", ' should print FizzBuzz ');
    });

    it('82 can\'t be divided by 3 or 5', async function () {
        var result = await main.numberIsFizzBuzz(82);
        assertchai.equal(result, 82, ' just the number');
    });

    it('0 can be divided between 3 and 5', async function () {
        var result = await main.numberIsFizzBuzz(0);
        assertchai.equal(result, "FizzBuzz", ' should print FizzBuzz ');
    })

    it('the negative -15 can be divided by 3', async function () {
        var result = await main.numberIsFizzBuzz(-15);
        assertchai.equal(result, "FizzBuzz", ' should print FizzBuzz ');
    });

    it('the negative -55 can be divided by 5', async function () {
        var result = await main.numberIsBuzz(-55);
        assertchai.equal(result, "Buzz", ' should print Buzz ');
    });
});

describe('Given two numbers generate the secuence betwen them ', function () {
    it('Generate between 0 and 15', async function () {
        var result = await main.generateSecuence(0, 15);
        assertchai.equal(result, "FizzBuzz,1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz", ' should print a secuence');
    });

    it('Generate between -15 and 0, and verify the sequence', async function () {
        var result = await main.generateSecuence(-15, 0);
        assertchai.equal(result, "FizzBuzz,-14,-13,Fizz,-11,Buzz,Fizz,-8,-7,Fizz,Buzz,-4,Fizz,-2,-1,FizzBuzz", ' should print a secuence');
    });

    it('Generate between -15 and 0 and verify if is an Array', async function () {
        var result = await main.generateSecuence(-15, 0);
        result.should.be.a('array');
    });

    it('Generate between -15 and 0 and verifies it has 16 elements', async function () {

        var result = await main.generateSecuence(-15, 0);
        expect(result).to.have.lengthOf(16);
    });

});
