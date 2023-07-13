const mathEnforcer = require('./4. Math Enforcer');
const { assert, expect } = require('chai')


describe('Testing Methods', () => {
    describe('Testing the addFive method', () => {
        it('Testing the addFive with string', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined
        })
        it('Testing the addFive with Number', () => {
            expect(mathEnforcer.addFive(5)).to.eq(10)
        })
        it('Testing the addFive with Float', () => {
            expect(mathEnforcer.addFive(5.01)).to.be.closeTo(10, 0.01)
        })
        it('Testing the addFive with Negative', () => {
            expect(mathEnforcer.addFive(-10)).to.eq(-5)
        })
    })
    describe('Testing the subtractTen method', () => {
        it('Testing the subtractTen with string', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined
        })
        it('Testing the subtractTen with Number', () => {
            expect(mathEnforcer.subtractTen(50)).to.eq(40)
        })
        it('Testing the subtractTen with Float', () => {
            expect(mathEnforcer.subtractTen(50.01)).to.be.closeTo(40, 0.01)
        })
        it('Testing the subtractTen with Negative', () => {
            expect(mathEnforcer.subtractTen(-10)).to.eq(-20)
        })
    })
    describe('Testing the sum method', () => {
        it('Testing the sum with two Numbers', () => {
            expect(mathEnforcer.sum(5, 5)).to.eq(10)
        })
        it('Testing the sum with Negative', () => {
            expect(mathEnforcer.sum(-1, -2)).to.eq(-3)
        })
        it('Testing the sum with string', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined
        })
        it('Testing the sum with two string', () => {
            expect(mathEnforcer.sum('5', '5')).to.be.undefined
        })
        it('Testing the sum with Float', () => {
            expect(mathEnforcer.sum(50.01, 20)).to.be.closeTo(70, 0.01)
        })
        it('Testing the sum with Negative', () => {
            expect(mathEnforcer.sum(-10, 20)).to.eq(10)

        })
    })
})