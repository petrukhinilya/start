function asyncSum(a, b) {
  let sum = a + b;
  return new Promise(function(resolve, reject){
    setTimeout(() => resolve(         ), 1000);
    if(typeof(a) !== 'number' && typeof(b) !== 'number'){
      return reject()
    }
  })
}

window.asyncSum = asyncSum;

export default asyncSum;
