/*
  Задача
  Написать функцию которая проверяет, является ли email валидным
  Прмеры
  isValidEmail("tima1702@gmail.com") === true
  isValidEmail("tima1702@gmail") === false
  isValidEmail("tima1702@gmail.") === false
  isValidEmail("tima1702gmail.com") === false
  isValidEmail("example_emai@gmail.com") === true
  isValidEmail("example8@gmail.com") === true
  isValidEmail("e2xample8@gmail.com") === true
  isValidEmail("e2xa.mple8@gmail.com") === true
 */

function isValidEmail(email) {
  let result = email.search(/@gmail.com/);
  if(result == -1){
    return false
  } else {
    return true
  }
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
