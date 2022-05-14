let button= document.querySelector('.ajouter');
button.addEventListener('click',function(e){
    e.preventDefault();

    let input= document.querySelector('.put'); 
    console.log(input.value); 
    let tache=  `
    <div id="todo2">
     <input  onchange='change(event)' type="checkbox" />
    <label for="name">${input.value}</label><button onclick='Delete(event)'><i class="fa-solid fa-trash-arrow-up"></i></button>
   </div> `;
   let text= document.querySelector('.taches');
   text.innerHTML+=tache;
   input.value='';
let augmenter= document.querySelector("#chiffre");
 augmenter.textContent = parseInt(augmenter.textContent)+1;

});
function change(e){
    let parent= e.target.parentElement
    console.log(parent.id)

    parent.style.backgroundColor = "Grey"
    let text = document.querySelector(`#${parent.id} label`)
    let button = document.querySelector(`#${parent.id} button`)

    button.style.visibility = "hidden"

    if (e.target.checked)
    {
        
    }
}

function Delete(e){
       
        let tache= document.querySelector('.taches');
        tache.removeChild(e.target.parentElement.parentElement);
        let diminuer= document.querySelector('#chiffre')
        diminuer.textContent=parseInt(diminuer.textContent)-1;
};
let ALL= document.querySelector('.delete');
 ALL.addEventListener('click', function(e){
     
    let tache= document.querySelector('.taches');
    tache.innerHTML="";
    let suppression = document.querySelector('#chiffre');
    suppression.textContent=0;

 });