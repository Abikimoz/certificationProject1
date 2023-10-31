// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import Validator from '../index.js';

test('step1', () => {
  const validator = new Validator();
  const schema = validator.string();

  assert.equal(typeof schema === 'object', true);
});

test('step2', () => {
  const validator = new Validator();
  const schema = validator.string();

  assert.equal(schema.isValid(''), true);
  assert.equal(schema.isValid(null), false);
  assert.equal(schema.isValid(), false);
  assert.equal(schema.isValid('abc'), true);
  assert.equal(schema.isValid(123), false);
});

test('step3', () => {
  const validator = new Validator();
  const schema = validator.string();

  assert.equal(schema.isValid('Hello!'), true);
  schema.length(4);
  assert.equal(schema.isValid('Hello!'), true);
  schema.length(4, 5);
  assert.equal(schema.isValid('Hello!'), false);
  schema.length(2);
  assert.equal(schema.isValid('Hello!'), true);
});

test('step4', () => {
  const validator = new Validator();
  const schema = validator.number();

  assert.equal(schema.isValid(null), false);
  assert.equal(schema.isValid(123), true);
  assert.equal(schema.isValid(NaN), false);
  assert.equal(schema.isEven().isValid(22), true);
  assert.equal(schema.isValid(23), false);
  assert.equal(schema.isValid(), false);
});

test('step5', () => {
  const validator = new Validator();
  const schema = validator.object();

  schema.shape({
    name: validator.string().length(5),
    age: validator.number().isEven(),
  });

  assert.equal(schema.isValid({ name: 'kolya', age: 100 }), true);
  assert.equal(schema.isValid({ name: 'maya', age: 2 }), false);
  assert.equal(schema.isValid({ name: 'anna', age: 3 }), false);
  assert.equal(schema.isValid({ name: 'sergey', age: 11136 }), true);
});
