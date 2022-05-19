let input= document.querySelector('#input')
let buttons=document.querySelectorAll('.btn')



buttons.forEach((button) => {
    button.addEventListener("click", (e) =>{
        
        // input.textContent+= e.target.id
        input.value += e.target.id
    })
});
equal.addEventListener('click',function(){

 input.value = eval(input.value)

})
actualise.addEventListener('click',function(){

    input.value='';
  
})
supprimer.addEventListener('click',function(){
  input.value=input.value.substr(0,input.value.length-1);
})

 cos.addEventListener('click',function(){
    input.value= Math.cos(input.value)

 })
 
 sin.addEventListener('click',function(){
    input.value= Math.sin(input.value)
 })

expo.addEventListener('click',function(){
    input.value= Math.expo(input.value)
 })


