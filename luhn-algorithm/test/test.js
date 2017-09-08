var assert = require("chai").assert;
var luhn = require("../lib/luhn-algorithm");

describe("doubleEverySecondNumber", function() {
  it("should return an array in which every second value is double the value of the corresponding digit in the input string", function() {
    var inputArray = [7,9,9,2,7,3,9,8,7,1,3];
    console.log(luhn);
    var result = luhn.step1(inputArray);
    console.log("result", result);
    assert.isTrue(result.join(',') === [ 7, 18, 9, 4, 7, 6, 9, 16, 7, 2, 3].join(','));
  });
});


describe("reduceOverNine", function() {
  it("subtracts values by 9, if they are over 9", function() {
    var inputArray = [ 7, 18, 9, 4, 7, 6, 9, 16, 7, 2, 3];
    var result = luhn.step2(inputArray);
    console.log("result", result);
    assert.isTrue(result.join(',') === [ 7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3].join(','));
  });
});

describe("sum", function() {
  it("sums all the values in an array", function() {
    var inputArray = [ 7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3 ];
    var result = luhn.step3(inputArray);
    console.log("result", result);
    assert.isTrue(result == 70);
  });
});