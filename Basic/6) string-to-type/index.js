export default function stringToType(str) {
  // let typ = str.replace(/["']/g,'')
  // if(typeof(typ) == '')
    // return typ
    //  let arr = str.split('').join('')
    //  return arr
    // return function(){
    //   return str[Symbol.toPrimitive]
    // }
    let bool = Boolean(str)
    if(bool == true){
      return str
    }
}
