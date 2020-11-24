function searchString(obj) {
  let str = ''
  if(obj){
    str ='?'
    for (let p in obj) {
      console.log(obj[p])
      if (obj.hasOwnProperty(p)) {
        if(obj[p] !== undefined && obj[p] !==null){
         console.log('str',str)
          str +=p +'='+ obj[p] + '&' ;
        }
      }
  }
  
  return str.slice(0, -1);
  }

}

searchString()
window.searchString = searchString;
 export default searchString;
