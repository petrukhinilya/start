function asyncSum(a, b) {
   
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      
      return resolve()}
    , 1000);
    // if(typeof(a) !== 'number' && typeof(b) !== 'number'){
    //   return reject()
    // }
  })
}

window.asyncSum = asyncSum;

export default asyncSum;
