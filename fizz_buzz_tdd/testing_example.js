var assert = require('assert');
var assertchai = require('chai').assert
    , foo = 'bar'
    , beverages = { tea: ['chai', 'matcha', 'oolong'] };

var should = require('chai').should() //actually call the function
var expect = require('chai').expect

var add = require('./add.js');




describe('Array', function () {
    describe('#indexOf()', function () {
        /*it('should return -1 when the value is not present', function() {
          assert.equal([1, 2, 3].indexOf(4), -1);
        });
    	
        it('should return 2 when adding 1 plus 1', function() {
          assert.equal(1 + 1, 2);
        });
    	
        it('tests with chai', function() {
                assertchai.typeOf(foo, 'string'); // without optional message
            assertchai.typeOf(foo, 'string', 'foo is a string'); // with optional message
            assertchai.equal(foo, 'bar', 'foo equal `bar`');
            assertchai.lengthOf(foo, 3, 'foo`s value has a length of 3');
            assertchai.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
        });
    	
        it('tests with chai should', function() {
                foo.should.be.a('string');
            foo.should.equal('bar');
            foo.should.have.lengthOf(3);
            beverages.should.have.property('tea').with.lengthOf(3);
        });
    	
        it('tests with chai should', function() {
                expect(foo).to.be.a('integer');
            expect(foo).to.equal('monkey');
            expect(foo).to.have.lengthOf(3);
            expect(beverages).to.have.property('tea').with.lengthOf(3);
        });*/

        it('should add two numbers', function () {
            assert.equal(add(5, 7), 12)
            assertchai.equal(add(5, 7), 12)
            add(5, 7).should.equal(12)
            expect(add(2, 2)).to.equal(4)
        });

    });
});