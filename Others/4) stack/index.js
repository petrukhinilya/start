/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {
  constructor(){
    this.items = []
  }
  push(elem){
    this.item.push(elem)
  }
  pop(){
    if(this.items.length == 0){
      return "Stack is empty"
    }
    return this.items.pop()
  }
  isEmpty(){
    return this.items.length == 0; 
  }
  print(){
    size: this.items.length
    let str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str; 
  }
}

window.Stack = Stack;

export default Stack;
