
// let div = document.createElement('div')
// let newForm = document.createElement('input')
// let newButton = document.createElement('input') 
// newForm.type='text'
// newButton.type='button'
// newButton.value = 'отправить' 
// document.body.append(div)
// div.insertAdjacentElement('afterbegin',newForm)
// div.insertAdjacentElement('beforeend',newButton)


// newButton.addEventListener('click',function(){ 
//     // console.log(document.body.lastElementChild.lastChild) 
 
//     document.body.append(div)
//     div.insertAdjacentElement('afterbegin',newForm)
//     div.insertAdjacentElement('beforeend',newButton)
// })





let formTo = document.getElementById('sendTo')
let form = document.getElementById('form')

formTo.addEventListener('click',function(){


    let newForm = document.createElement('input')

    newForm.type='text'
    newForm.id = 'button'

    let formFrom = document.getElementById('getTo')
    newForm.value = formFrom.value


    if(formFrom.value== '555'){
        return formFrom.value = '---'
    }

    document.body.append(newForm)

    // let number = document.querySelectorAll('#button')
    // if(number.length % 2 == 0){
    //     newForm.value.toUpperCase()
    // }else{newForm.value.toLowerCase()}

})


