function queryToObject(query) {
  switch(query){
  case 'null': return null
  case 'undefined': return undefined
  case 'true': return true
  case 'false': return false
}

let num = Number(query) 
if(!isNaN(num)&& str.length >0){
  return num
}
if(typeof(query) === 'string'){
  return query
} 

  let arr = query.split('')
  let obj = {}
  for (let i = 0; i < arr.length; i++)
    obj[i] = arr[i];
  return obj;
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