'use strict';

const sortMerge = require('../mergeSort');

describe('mergeSort', () => {
  it('Can sort an array by using mergeSort method', () => {
    const intArr = [8, 4, 23, 42, 16, 15];
    expect(sortMerge(intArr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});

