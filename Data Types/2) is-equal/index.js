function isEqual(a, b) {
  let obj1 =JSON.stringify(a);
  let obj2 =JSON.stringify(b);
  if (obj1 === obj2){
    return true
  }
}

window.isEqual = isEqual;

export default isEqual;
