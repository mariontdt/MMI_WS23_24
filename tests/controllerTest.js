const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI');

describe("fahrenheitToCelsius()", function() {

    it("should convert 32 Fahrenheit to 0 Celsius", function() {

        const result = apiTemperature.fahrenheitToCelcius(32);

        expect(result).to.equal(0);

    });

    it("should convert 212 Fahrenheit to 100 Celsius", function() {

        const result = apiTemperature.fahrenheitToCelcius(212);

        expect(result).to.equal(100);

    });

    it("should convert -40 Fahrenheit to -40 Celsius", function() {

    const result = apiTemperature.fahrenheitToCelcius(-40);

    expect(result).to.equal(-40);

});
});