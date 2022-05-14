
let connexion =document.querySelector('#connexion')
let contener=document.querySelector('.contener')
let modal= document.querySelector('.modal')
let none =document.querySelector('#close')

console.log(connexion)
function show(){
    modal.style.display='block';
   "contener.style.display='block';  
   document.body.style.height='100%';
    document.body.style.overflow='hidden'
   


}


function hidden (){

  modal.style.display='none';
 contener.style.display='none';
  document.body.style.overflow='none';

}

connexion.addEventListener('click',show);
none.addEventListener('click',hidden);