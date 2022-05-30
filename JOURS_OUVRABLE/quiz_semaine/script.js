let check=document.querySelectorAll('.check')
let box1=document.querySelector('.box1')
let box2=document.querySelector('.box2')
let box3=document.querySelector('.box3')
let cont = document.querySelector(".contener")

let levels=[]
current_level=null


 function remplirContener(){
     for (let i = 0; i< 3 ; i++) {
         let child=cont.children[i]
         child[0].textContent=current_level.questions[i]
         for (let j=1; j<4 ; j++){
            child[j].textContent=current_level.reponse[i][j - 1]
         }
             
     }
 }

window.addEventListener('load', async function(){

     let levels= await this.fetch('/level.json')
           levels=await levels.json();
           current_level=levels[0];
           console.log(current_level);
           remplirContener()


})










