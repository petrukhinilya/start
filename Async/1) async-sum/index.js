function asyncSum(a, b) {
   
  return new Promise(function(resolve, reject){
      if(isNaN(a)||isNaN(b)){
              setTimeout(function(){
      
        return resolve(0)}
      , 1000);
      }
        if((!a || typeof(a) !== 'number' )||(!b|| typeof(b) !== 'number')){
      return reject(
        new Error()
      )
    }else{
      setTimeout(function(){
      
        return resolve(a+b)}
      , 1000);
    }
  })
}

window.asyncSum = asyncSum;

export default asyncSum;
