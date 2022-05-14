




let currentLevel= null;
let levels=[];
let inter= null;
let found=0;
let text= document.querySelector('#text1');
let text2= document.querySelector('#text2');


function showanimlevel(currentLevel){
  let span =document.querySelector('#span')
  span.parentElement.style.display= 'flex';
span.textContent=`level ${currentLevel.level}`
span.classList.add('animLevel');
setTimeout(()=>{
span.classList.remove('animLevel')
span.parentElement.style.display= 'none';
generate_number(currentLevel.min,currentLevel.max,currentLevel.operators);

},4000);


}



const progress= document.querySelector('.progress1')
 function decompte(nb_secondes){
let count = nb_secondes
   inter=  setInterval(()=>{
       let percent=(count*400)/nb_secondes
       if(percent>240){
         progress.style.backgroundColor='lime';
       }
       else if(percent>120)
       { 
        progress.style.backgroundColor='orange';
       }
       else
       {
        progress.style.backgroundColor='red';
       }

       progress.style.width=percent+ "px";
       if(count ===0){
         found=0;
         clearInterval(inter);
         generate_number(currentLevel.min,currentLevel.max,currentLevel.operators);
       }
       count--
     },1000)


 }



let num1=0
let num2=0

let operateur=null 

   function random(min,max){
     
   return Math.floor(Math.random()*(max-min)+min)

   }


  function generate_number(min,max,tab){
     
    num1= random(min,max)
    num2= random(min,max)
    operateur= tab.length>1?random_operator(tab):tab[0];
    let signe=document.querySelector("#operator")
    signe.textContent=operateur 


    let nombre= document.querySelector('#number')
    nombre.textContent=num1

    let nombre1= document.querySelector('#number2')
    nombre1.textContent=num2
    decompte(currentLevel.nb_seconde)
    random_operator(tab)
 

  }
  
  function random_operator(tab){
    let number=Math.floor(Math.random()*tab.length)
    return tab[number] 
  }


   function verifi(e){
    let result= eval(num1+operateur+num2)
    if(parseInt(e.target.value) === (operateur==='/'? parseInt(result):result))
    {
      clearInterval(inter);
      progress.style.width= '400px';
      found++;
      if(found===currentLevel.correct_response){
        found=0;
        currentLevel=levels[currentLevel.level];
        text.textContent=currentLevel.level
        showanimlevel(currentLevel)
      }else generate_number(currentLevel.min,currentLevel.max,currentLevel.operators);
       e.target.value="";
       text2.textContent = found;


    }

   }

       


    // window.addEventListener('load', async function(){

    //      console.log('salut')
     //     let data =  await fetch('./styles.css');
          
      //    data= await data.text();
      //    console.log(data);



     //});

     window.addEventListener('load', async function(){

          console.log('salut')
          levels =  await fetch('./level.json');
          levels= await levels.json();
          currentLevel=levels[0]
          text.textContent=currentLevel.level
          showanimlevel(currentLevel)
     

        });
        