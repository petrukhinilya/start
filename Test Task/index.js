function sendForm(){
    // let formTo = document.getElementById('sendTo')
    let formFrom = document.getElementById('getTo')
    
    let newForm = document.createElement('input')
    newForm.type='text'
    newForm.id ='newform'
    newForm.value = formFrom.value
    if(formFrom == 555){
        return value = '---'
    }
    document.body.append(newForm)
    console.log('lf')


}
// function getForm(){
//     let formTo = document.getElementById('sendTo')
//     let value = formTo.value 
//     if(value =='555'){
//         return value = '---'
//     }
// }