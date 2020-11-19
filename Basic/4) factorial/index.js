function factorial(n) {
    if(n<=10 && n >0){
        if (n==1){ 
            return 1
        }
        else {
            return n*factorial(n-1);		
        }
    }
}


window.factorial = factorial;

export default factorial;
