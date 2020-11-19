function searchString(obj) {
  let arr = Object.entries(obj)
  let str = arr.join("")
  return str

}

window.searchString = searchString;

export default searchString;
