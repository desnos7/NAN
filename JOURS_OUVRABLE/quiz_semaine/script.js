let check=document.querySelectorAll('.check')
let box1=document.querySelector('.box1')
let box2=document.querySelector('.box2')
let box3=document.querySelector('.box3')
let cont = document.querySelector(".contener")

let levels=null

let button=document.querySelector('button')
for(let i=0; i<check.length;i++){
    check[i].addEventListener('click',function(e){
        console.log(e.target.value);
 })

}

 window.addEventListener("load", async function(){
     levels= await fetch('./level.json');
     levels= await levels.json();
     for (let i = 0; i < 3; i++)
     {
         cont.children[i].children[0].textContent = levels[0].questions[i]

         cont.children[i].children[].textContent= levels[0].reponse[i]

     }
 })









