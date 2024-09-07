
const assert = require('assert');
const Calculator = require('../calculator')

describe('Calculator', function() {

        let calculator;

        beforeEach(function() {
            calculator = new Calculator();
        });

        describe('add()', function() {
            it('Should return 5 for 2 + 3', function() {
                assert.strictEqual(calculator.add(2,3), 5);
            });

            it('Should return -1 for -2+1', function() {
                assert.strictEqual(calculator.add(-2,1),-1);
            });
        });

        describe('subtract()', function() {
            it('should return 1 for 3-2', function() {
                assert.strictEqual(calculator.subtract(3,2),1);
            });

            it('should return -3 for 1-4', function() {
                assert.strictEqual(calculator.subtract(1,4),-3);
            });
        });

        describe('multiply()', function() {
            it('should return 6 for 2*3', function() {
                assert.strictEqual(calculator.multiply(2,3),6);
            });

            it('Should return -8 for -4*2', function() {
                assert.strictEqual(calculator.multiply(-4,2), -8);
            });
        })

        describe('divide() ', function() {
            it('should return 2 for 6/3', function() {
                assert.strictEqual(calculator.divide(6,3),2);
            });

            it('SHould throw an error when dividing by 0', function() {
                assert.throws(() => calculator.divide(5,0), '/Cannot divide by zero/');
            });
        });


});