// javascript code

var createCounter = function(n){
  let counter = n;
  return function(){
    counter++;
    console.log(counter);
  }
}

// counter ||
var CreateCounter = function(init){
  let curentValue = init;

  return{
    increment(){
      curentValue++;
      console.log(curentValue);
    },
    decrement(){
      curentValue--;
      console.log(curentValue);
    },
    reset(){
      return currentValue = init;
      console.log(curentValue);
    }
  }
}