function secondLargest(arrayOfNumbers) {
  arrayOfNumbers.sort(function(a,b){return b-a});
  return arrayOfNumbers[1];
}

module.exports=secondLargest;