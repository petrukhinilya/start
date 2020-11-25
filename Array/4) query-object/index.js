function queryToObject(query) {
//   switch(query){
//   case 'null': return null
//   case 'undefined': return undefined
//   case 'true': return true
//   case 'false': return false
// }

// let num = Number(query) 
// if(!isNaN(num)&& str.length >0){
//   return num
// }
// if(typeof(query) === 'string'){
//   return query
// } 

  let str = query
  if(str.length==''){
    return {}
  }
  str = str.replace('?','')
  if(str.length==''){
    return {}
  }
  
  str = str.replace(/=/g,'":')
  str = str.replace(/&/g,',')
  
  return str

};

window.queryToObject = queryToObject;

export default queryToObject;
// switch(query){
//   case 'null': return null
//   case 'undefined': return undefined
//   case 'true': return true
//   case 'false': return false
// }

// let num = Number(query) 
// if(!isNaN(num)&& str.length >0){
//   return num
// }
// if(typeof(query) === 'string'){
//   return query
// } 