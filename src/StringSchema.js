export default class StringSchema {
  validators = [(val) => typeof val === 'string'];

  isValid(val) {
    return this.validators.every((validator) => validator(val));
  }

  length(minLength, maxLength) {
    const validator = (val) => {
      if (!maxLength) return minLength <= val.length;
      return minLength <= val.length <= maxLength;
    };
    this.validators[1] = validator;
    return this;
  }
}
