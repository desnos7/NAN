let check=document.querySelectorAll('.check')
let box1=document.querySelector('.box1')
let box2=document.querySelector('.box2')
let box3=document.querySelector('.box3')

let button=document.querySelector('button')
for(let i=0; i<check.length;i++){
    check[i].addEventListener('click',function(e){
        console.log(e.target.value);
 })

}






// var checkedValue = null; 
// button.addEventListener('click',function(){
//     for(var i=0; check[i]; ++i){
//         if(check[i].checked){
//             checkedValue = check[i].value;
            
//             console.log('vrai');
//         }
//         console.log('faux');

//   }

// })


