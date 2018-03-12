/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/Form.js';

describe('stringContaining', () => {
  const expected = 'Get Results';
  it('matches if the actual string does include the expected string', () => {
    expect('Get Results').toEqual(expect.stringContaining(expected));
  });
});
