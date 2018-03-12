/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';

describe('stringContaining', () => {
  const expected = 'doctor';
  it('matches if the actual string does include the expected string', () => {
    expect('doctor').toEqual(expect.stringContaining(expected));
  });
});
