/**
 * calculator-utils.js
 * ------------------------------------------------------------------
 * Small validation + rounding helpers shared by every calculator in
 * this tool. Centralising validation here means one place to fix a
 * bug, not five.
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.PRCalculatorUtils = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  /** Custom error type so calling code can tell validation errors
   *  apart from real bugs and show the message directly to the user. */
  class InputError extends Error {
    constructor(message, field) {
      super(message);
      this.name = "InputError";
      this.field = field || null;
    }
  }

  /** Round to nearest rupee. All money values in this tool are whole
   *  rupees — no paise — to avoid floating point drift in reports. */
  function roundRupees(value) {
    return Math.round(value);
  }

  /** Round a ratio (e.g. DSCR) to 2 decimal places. */
  function roundRatio(value) {
    return Math.round(value * 100) / 100;
  }

  function assertPositiveNumber(value, fieldName) {
    const num = Number(value);
    if (value === "" || value === null || value === undefined || Number.isNaN(num)) {
      throw new InputError(`${fieldName} is required and must be a number.`, fieldName);
    }
    if (!Number.isFinite(num)) {
      throw new InputError(`${fieldName} must be a finite number.`, fieldName);
    }
    if (num <= 0) {
      throw new InputError(`${fieldName} must be greater than 0.`, fieldName);
    }
    return num;
  }

  function assertNonNegativeNumber(value, fieldName) {
    const num = Number(value);
    if (value === "" || value === null || value === undefined || Number.isNaN(num)) {
      throw new InputError(`${fieldName} is required and must be a number.`, fieldName);
    }
    if (!Number.isFinite(num)) {
      throw new InputError(`${fieldName} must be a finite number.`, fieldName);
    }
    if (num < 0) {
      throw new InputError(`${fieldName} cannot be negative.`, fieldName);
    }
    return num;
  }

  function assertOneOf(value, allowedValues, fieldName) {
    if (!allowedValues.includes(value)) {
      throw new InputError(
        `${fieldName} must be one of: ${allowedValues.join(", ")}. Got: ${value}`,
        fieldName
      );
    }
    return value;
  }

  return {
    InputError,
    roundRupees,
    roundRatio,
    assertPositiveNumber,
    assertNonNegativeNumber,
    assertOneOf,
  };
});
