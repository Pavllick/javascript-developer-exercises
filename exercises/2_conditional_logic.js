function paintMixer(color1, color2) {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * red and yellow should mix to return 'orange'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
  // PLACE YOUR CODE BELOW
  const colors = [color1, color2]

  const purple = ['blue', 'red']
  const brown = ['red', 'green']
  const green = ['blue', 'yellow']
  const orange = ['red', 'yellow']

  const checkColor = (resArr) => colors.every(c => resArr.indexOf(c) > -1)

  if (checkColor(purple)) {
    return 'purple'
  } else if (checkColor(brown)) {
    return 'brown'
  } else if (checkColor(green)) {
    return 'green'
  } else if (checkColor(orange)) {
    return 'orange'
  }

  return 'unknown'
  // PLACE YOUR CODE ABOVE
}

paintMixer('blue', 'red') === 'purple' && console.log('First mix worked')
paintMixer('red', 'green') === 'brown' && console.log('Second mix worked')
paintMixer('red', 'yellow') === 'orange' && console.log('Third mix worked')
paintMixer('green', 'red') === 'brown' && console.log('Fourth mix worked')
paintMixer('blue', 'yellow') === 'green' && console.log('Fifth mix worked')
paintMixer('apple', 'frog') === 'unknown' && console.log('Apples and frogs don\'t mix, as expected')

/*
If everything works, you should see the following on the console
when run with "node 2_conditional_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Fifth mix worked
Apples and frogs don't mix, as expected
*/
