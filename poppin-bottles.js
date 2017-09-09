payment = process.argv.slice(2);

function totalBottles(dollars) {
  var firstPurchase = Math.floor(dollars/2);
  var change = dollars - 2*firstPurchase;

  var emptyBottles = firstPurchase;
  var bottleCaps = firstPurchase;

  // These variables are incremented with every exchange
  var total = firstPurchase;
  var bottlesFromBottles = 0;
  var bottlesFromCaps = 0;

  moreBottles(emptyBottles,bottleCaps);

  function moreBottles(empties,caps) {
    // Exchange empties and caps for new bottles
    bottlesFromBottles += Math.floor(empties/2)
    bottlesFromCaps += Math.floor(caps/4);

    // Add new bottles to total
    var newBottles = Math.floor(empties/2) + Math.floor(caps/4);
    total += newBottles;

    // Re-calculate empties and caps from new bottles and remnants of last transaction
    var currentEmpties = newBottles + (empties%2);
    var currentCaps = newBottles + (caps%4);

    // If not enough new empties and caps are produced, ends function
    if ( currentEmpties < 2 || currentCaps < 4 ) {
      return 0;
    }

    // If there are enough empties and caps remaining, obtain more bottles
    moreBottles(currentEmpties,currentCaps);
  }

  console.log("Total bottles: " + total);
  console.log("Total earned from empty bottles: " + bottlesFromBottles);
  console.log("Total earned from caps: " + bottlesFromCaps);
  return total;

}

totalBottles(payment);