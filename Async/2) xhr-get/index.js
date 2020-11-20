function xhrGet(url) {
  return new Promise(function(resolve,reject){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url)  
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json'
    xhr.onload = function(){
        return resolve(JSON.parse(xhr.responseText))
    }

    xhr.send()
    
  } )
  // xhr.onerror = ()=>reject()
}

window.xhrGet = xhrGet;

export default xhrGet;
