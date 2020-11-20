function fullSum(...args) {
  try{
  for(let i=0;i<args.length;i++){
    let elem = args[i]
    if(typeof(elem) !== 'number'){
      return 
  } else{
    return args.reduce((sum, current) => sum + current);
  }
}
  }catch{
    alert("Wrong Argument Type")
  }
}

window.fullSum = fullSum;

export default fullSum;
