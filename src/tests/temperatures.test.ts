import {
  temperatures,
  convertCelsiusToFahrenheit,
  filterHighTemperatures,
  filterLowTemperatures,
  getMaxTemperature,
  getMinTemperature,
  labelTemperatures,
} from "../temperatures";

describe("Temperatures", () => {
  describe("Temperature Analysis", () => {
    describe("filterHighTemperatures", () => {
      it("should filter temperatures greater than or equal to 25 degrees Celsius", () => {
        expect(filterHighTemperatures(temperatures)).toEqual([
          25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 25, 28, 29, 27, 26,
        ]);
      });
    });

    describe("filterLowTemperatures", () => {
      it("should filter temperatures less than 20 degrees Celsius", () => {
        expect(filterLowTemperatures(temperatures)).toEqual([19, 18, 19, 19]);
      });
    });
  });

  describe("Temperature Transformation", () => {
    describe("convertCelsiusToFahrenheit", () => {
      it("should convert temperatures to Fahrenheit", () => {
        expect(convertCelsiusToFahrenheit([22, 25])).toEqual([71.6, 77]);
      });
    });

    describe("labelTemperatures", () => {
      it("should label temperatures correctly", () => {
        expect(labelTemperatures([22, 25, 19])).toEqual([
          "Mild",
          "Warm",
          "Cool",
        ]);
      });
    });
  });

  describe("Summary Statistics", () => {
    describe("getMaxTemperature", () => {
      it("should find the highest temperature of the month", () => {
        expect(getMaxTemperature(temperatures)).toBe(30);
      });
    });

    describe("getMinTemperature", () => {
      it("should find the lowest temperature of the month", () => {
        expect(getMinTemperature(temperatures)).toBe(18);
      });
    });
  });
});
