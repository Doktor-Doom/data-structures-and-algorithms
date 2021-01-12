'use strict';

const insertSort = require('../insertionSort');

describe('insertionSort', () => {
  it('Can sort an array by using insertionSort method', () => {
    const intArr = [3, 2, 5, 1, 4];
    expect(insertSort(intArr)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});


