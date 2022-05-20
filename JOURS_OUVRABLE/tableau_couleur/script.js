let body= document.querySelector('body')

let Click=document.createElement('button')
Click.className='click'
Click.textContent='click'
body.appendChild(Click)

let Reset= document.createElement('button')
Reset.className='reset'
Reset.textContent='reset'
body.appendChild(Reset)

let Add= document.createElement('button')
Add.className='add'
Add.textContent='add'
body.appendChild(Add)

let tache= document.querySelector('.tache')




let color=['rgb(212, 81, 81)','rgb(69, 205, 67)','rgb(102, 70, 197)','rgb(70, 197, 193)','rgb(208, 167, 198)'] 

function get_random(){
     return color[Math.floor(Math.random() * color.length)];
}



function create(){

    let colortab=document.createElement('div')
    colortab.className='colgroup'
    colortab.style.backgroundColor=get_random()
    tache.appendChild(colortab)
    if (tache.children.length == 9)
    {
        Add.disabled = true
    }
    Reset.disabled= false
    Click.disabled=false;

}

for (let i = 0; i < 9; i++)
{
    create()

}

function generate_color(){
    children = tache.children
    for (let i = 0; i < children.length; i++)
    {
        children[i].style.backgroundColor = get_random()
    }
}


Click.addEventListener('click', generate_color)

Reset.addEventListener('click',function(){

    tache.innerHTML='';
    Reset.disabled= true
   Click.disabled=true;
   Add.disabled=false

});

Add.addEventListener('click',create);
