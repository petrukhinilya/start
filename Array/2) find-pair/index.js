function findPair(arr) {
  for(let i=0;i<arr.length;i++){
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return arr[i]
  }
  }
  return null
}


window.findPair = findPair;

export default findPair;
