function numero(x){

    result = "";

    function parImpar(x){
        if(x % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    function primo(x){
        if(x < 2){
            return false;
        }

        for(let i=2; i <= x / 2; i++){
            if(x % i === 0){
                return false;
            }
        }
        return true;
    }

    function fibonacci(x){
        let antes = 0;
        let actual = 1;

        while(actual < x){
            let temp = antes;
            antes = actual;
            actual += temp;
            if(actual === x){
                return true;
            }
        }
        return false;
    }
  if(primo(x)){
        result += x + " es primo,";
    }else{
        result += x + " no es primo,"
    }
    
     if(fibonacci(x)){
        result +=" fibonacci,";
    }else{
        result +=" no es fibonacci,"
    }

    if(parImpar(x)){
        result +=" y es par";
    }else{
        result +=" y es impar";
    }

  

   
return result;
}


console.log(numero(2))
console.log(numero(7))

