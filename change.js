(function() {
  // let amount= 47;
  // let bills = [20, 10, 5, 1];
  

  function changeMachine(amount){  
    let newArray =[];
    let bills = [20, 10, 5, 1];
    for (i=0; i<bills.length; i++) {
    newArray[i] = Math.floor(amount/bills[i]);
    amount= amount- (bills[i]*newArray[i]);
  }

return newArray;
}
module.exports=changeMachine;
})();
