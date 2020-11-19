export default function stringToType(str) {
  if(typeof(str) == "string"){
    return String(str)
  }
  if(typeof(str) == 'number'){
    return Number(str)
  }
  if(typeof(str) == "boolean"){
    return Boolean(str)
  }
}
