/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  constructor(){
    this.items =[]
    this.token = null
    this.callback = null
  }
  subscribe(callback){
    // callback(this.token)
    this.callback = callback
  }
  setToken(token){
    this.token =token
    if(this.callback){
      this.callback(this.token)
    }
  }
  removeToken(){
    this.token = null
    if(this.callback){
      this.callback(null)
    }
    // 
  }
  getToken(){
    return this.token
  }
}

window.TokenService = TokenService;

export default TokenService;
