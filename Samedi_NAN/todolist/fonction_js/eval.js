function eval (string){
let operator =["+","-","*","/"]
let value="";
let i= 0;
while(i<string.length){
    console.log('i',i);
    if( operator.includes(string[i])&& i>0){
        let next_number=string[i+1]
        switch (string[i]){
            case"+":
            value =parseInt(value) + parseInt( next_number);
            break;
            case"-":
            value =parseInt(value) - parseInt( next_number);
            break;
            case"*":
            value =parseInt(value) * parseInt( next_number);
            break;
            case"/":
            value =parseInt(value) / parseInt( next_number);
            break;
          }
          i=i+2
          console.log('value',value,i);
    }else{
        value +=string[i];
        i++
    }
 }
 return value
}

console.log(eval('-2+222+7'))