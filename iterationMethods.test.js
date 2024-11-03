const {
  temperatures,
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
} = require("./iterationMethods.js");

describe("Temperature Analysis and Transformations", () => {
  describe("Temperature Analysis", () => {
    it("should filter temperatures greater than or equal to 25 degrees Celsius", () => {
      expect(filterHighTemperatures(temperatures)).toEqual([
        25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 25, 28, 29, 27, 26,
      ]);
    });

    it("should filter temperatures less than 20 degrees Celsius", () => {
      expect(filterLowTemperatures(temperatures)).toEqual([19, 18, 19, 19]);
    });
  });

  describe("Temperature Transformation", () => {
    it("should convert temperatures to Fahrenheit", () => {
      expect(convertCelsiusToFahrenheit([22, 25])).toEqual([71.6, 77]);
    });

    it("should label temperatures correctly", () => {
      expect(labelTemperatures([22, 25, 19])).toEqual(["Mild", "Warm", "Cool"]);
    });
  });

  describe("Summary Statistics", () => {
    it("should find the highest temperature of the month", () => {
      expect(getMaxTemperature(temperatures)).toBe(30);
    });

    it("should find the lowest temperature of the month", () => {
      expect(getMinTemperature(temperatures)).toBe(18);
    });
  });
});
