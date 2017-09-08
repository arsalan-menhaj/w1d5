var doubleEverySecondNumber = function(arrayOfNumbers) {
  // accepts array of numbers

  var an = arrayOfNumbers;
  var everySecondNumber = false;

  for ( i = 0 ; i < an.length ; i ++ ) {
    if ( everySecondNumber === true ) {
      an[i] = 2 * Number(an[i]);
      everySecondNumber = false;
    } else  {
      an[i] = Number(an[i]);
      everySecondNumber = true;
    }
  }
  return an;
}

var reduceOverNine = function(arrayOfNumbers) {
  // accepts array of numbers

  var an = arrayOfNumbers;
  for ( i = 0 ; i < an.length ; i ++ ) {
    if ( Number(an[i]) > 9 ) {
      an[i] = Number(an[i]) - 9 ;
    }
  }
  return an;
}

var sum = function(arrayOfNumbers) {
  var total = 0;
  for ( var i = 0 ; i < arrayOfNumbers.length ; i++ ) {
    total += arrayOfNumbers[i];
  }
  return total;
}





function check(accountNumber) {
  // accepts single number value

  var an = accountNumber.split('');

  // Step1: From the rightmost digit, which is the check digit, and moving left, double the value of every second digit.
  var step1Result = doubleEverySecondNumber(an);

  // Step 2: If this results in a number above 9 for any of the digits, subtract 9
  var step2Result = reduceOverNine(step1Result);

  // Step 3: Sum all the digits
  var step3Result = sum(step2Result);


  // Step 4: Check modulo 10 of sum
    // Return true if 0, else return false
  return ( step3Result % 10 === 0 );
}

module.exports = {
  step1: doubleEverySecondNumber,
  step2: reduceOverNine,
  step3: sum,

}

// Test code
console.log(check('79927398713'));