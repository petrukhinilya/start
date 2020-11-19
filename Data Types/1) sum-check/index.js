function sumCheck(a, b) {
  try{ 
    let sum = a + b
    if(typeof(a) =="number" && typeof(b)=="number") {
      return sum
    }
} catch (err){
  alert("Wrong arguments type!")
}
}

window.sumCheck = sumCheck;

export default sumCheck;
