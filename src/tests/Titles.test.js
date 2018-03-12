/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Titles from '../components/Titles.js';

describe('stringContaining', () => {
  const expected = 'Medical Finder';
  it('matches if the actual string does include the expected string', () => {
    expect('Medical Finder').toEqual(expect.stringContaining(expected));
  });
});
