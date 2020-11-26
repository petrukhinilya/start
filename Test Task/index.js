
    let formTo = document.getElementById('sendTo')
    let form = document.getElementById('form')
    let formFrom = document.getElementById('txt')
formTo.addEventListener('click',function(){

 

    let newForm = document.createElement('input')

    newForm.type='text'
    newForm.id = 'txt'


    newForm.value = formFrom.value
 

    if(formFrom.value== '555'){
        return formFrom.value = '---'
    }


    document.body.append(newForm)

 

})
formTo.addEventListener('click',function(){
    let number = document.querySelectorAll('#txt')

    if(number.length % 2 == 1){
        formFrom.value = formFrom.value.toUpperCase()
}else {
    formFrom.value = formFrom.value.toLowerCase()}

 })
    // let number = document.querySelectorAll('#txt')
    // if(number.length % 2 == 0){
    //     newForm.value.toUpperCase()
    // }else{newForm.value.toLowerCase()}
    // let number = document.querySelectorAll('#txt')
    // for(let i=0;i<number.length;i++){
    // if(number.length % 2 == 0){
    //    number[i].value.toUpperCase()
    // }else{
    //     number[i].value.toLowerCase()}
    // }