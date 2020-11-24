export default function stringToType(str) {
  
  switch(str){
    case 'null': return null
    case 'undefined': return undefined
    case 'true': return true
    case 'false': return false
  }
  
  let num = Number(str) 
  if(!isNaN(num)&& str.length >0){
    return num
  }
  console.log(num)
  if(typeof(str) === 'string'){
    return str
  } 

  
}
