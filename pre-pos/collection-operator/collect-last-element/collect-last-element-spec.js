'use strict';

describe('collect_last_element', function () {

  var collection = [1, 2, 3, 4, 5];

  it('弹出集合最后一个元素', function() {

    var result = collect_last_element(collection);
    expect(result).toEqual(5);
  });
});


