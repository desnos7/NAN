let boutton= document.querySelector ('.ajouter');
  boutton.addEventListener('click',function(e){
 e.preventDefault();

 let input= document.querySelector('.put')
 console.log(input.value);

 let tache=
 `
    <div id="todo2">
     <input  onchange='change(event)' type="checkbox" />
    <label for="name">${input.value}</label><button onclick='Delete(event)'><i class="fa-solid fa-trash-arrow-up"></i></button>
   </div> `;

let text=document.querySelector('.taches')

 text.innerHTML+=tache;
 input.value='';
 let augmenter= document.querySelector('#chiffre')
augmenter.textContent= parseInt(augmenter.textContent)+1;

  });


  function Delete(e) {

   let text= document.querySelector('.taches')
   text.removeChild(e.target.parentElement.parentElement);

   let diminuer =document.querySelector('#chiffre')
   diminuer.textContent=parseInt(diminuer.textContent)-1;


  }

  let all= document.querySelector('.delete')
   all.addEventListener('click',function(e){
    
   let text= document.querySelector('.taches')
   text.innerHTML='';
  
    let suppression= document.querySelector('#chiffre')

    suppression.textContent="0";



   })