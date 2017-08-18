(function(){
let mountainArray = [24000, 32000, 16000, 14400];
let sortedMountain = mountainArray.sort(function(a,b){return b-a});
return console.log(sortedMountain[0]);

})();
