export default class ObjectSchema {
  constructor(validatorObj) {
    this.validatorObj = validatorObj;
  }

  shape(object) {
    this.validatorObj = object;
  }

  isValid(object) {
    const keys = Object.keys(object);
    if (keys.length !== Object.keys(this.validatorObj).length) return false;
    return keys.every((key) => this.validatorObj[key].isValid(object[key]));
  }
}
