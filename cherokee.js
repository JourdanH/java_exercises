(function(){

function rabbit(pop, birthRate, weeks){
// let startingPopulation=200;
// let birthRate 
// let numberOfWeeks;
let numberHares;
for (let i =0;  i<weeks;i++) {
  pop = pop+(pop*birthRate);
   numberHares=Math.floor(pop);
}

return numberHares;
// console.log ("There will be "+ numberHares + " after "+numberOfWeeks+ " weeks")
}
module.exports=rabbit;
})();
