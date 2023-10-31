export default class NumberSchema {
  validators = [(val) => (typeof val === 'number' || typeof val === 'bigint') && !Number.isNaN(val)];

  constructor(newValidators) {
    if (newValidators) this.validators = newValidators;
  }

  isValid(val) {
    return this.validators.every((validator) => validator(val));
  }

  isEven() {
    const validator = (val) => val % 2 === 0;
    this.validators[1] = validator;
    return this;
    // new NumberSchema([...this.validators, validator]);
  }
}
