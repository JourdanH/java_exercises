(function(){
function tallestMountain(mountainArray){
let sortedMountain = mountainArray.sort(function(a,b){return b-a});
return sortedMountain[0];

}

module.exports = tallestMountain;
})();

