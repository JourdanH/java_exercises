(function(){
let startingPopulation=200;
let birthRate = 0.1;
let numberOfWeeks =5;
let numberHares = 0;
for (let i =0;  i<numberOfWeeks;i++) {
  startingPopulation = startingPopulation+(startingPopulation*birthRate);
  numberHares=Math.floor(startingPopulation);
}


console.log ("There will be "+ numberHares + " after "+numberOfWeeks+ " weeks")


})();
