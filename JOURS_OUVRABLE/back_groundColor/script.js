let input1 = document.querySelector('#red')
let input2 = document.querySelector('#green')
let input3 = document.querySelector('#blue')
 let box= document.querySelector('.box')

 
 
 function change(){
     
let red=input1.value;
let green=input2.value;
let blue=input3.value;

 box.style.backgroundColor=`rgb(${red},${green}, ${blue})`;

 }
 

