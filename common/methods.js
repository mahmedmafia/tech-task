module.exports={
   genereateRandomNumber:function(name){
    let nameSum = '';
    for (let charachter of name.split('')) {
      nameSum += Math.floor((Math.random() * name.length)) + charachter.charCodeAt(0);
    }
    return nameSum;
   }

}
