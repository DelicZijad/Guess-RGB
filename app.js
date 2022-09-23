'use strict';
let amount=6;
const upper=document.getElementById('upper');
const random=document.getElementById('random');
const container=document.getElementById('container');
const btns=document.getElementById('btns')
display(amount)
btns.addEventListener('click',function(e){
    if(!e.target.closest('button'))return
  const btn=e.target;
  const id=btn.id;
  if(id==='easy')amount=3;
  else if(id==='hard')amount=6;
   else if (id==='again'){
    clear()
     display(amount)
      again('disable')
    }
    else {
    clear()
     display(amount)
    }
    
})

function display(num){
 for (let i = 0; i < num; i++) {
const div=document.createElement('div');
div.classList.add('choice');
div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
container.appendChild(div)
    }
    execute()
}
function execute(){
    const choices=[...document.getElementsByClassName('choice')]
    random.textContent= choices[Math.floor(Math.random() * choices.length)].style.backgroundColor;
    choices.forEach(choice=>{
        choice.addEventListener('click',function(){
      if(random.textContent!==choice.style.backgroundColor){
        choice.classList.add('hidden')
      }
      else{
        choices.forEach(ch=>{
            ch.classList.remove('hidden');
            ch.style.backgroundColor=choice.style.backgroundColor;
           })
         again('enable')
      }
        })
    })
}
function again(value){
    if(value==='enable')document.getElementById('again').disabled=false;
    else if(value==='disable')document.getElementById('again').disabled=true;
}
function clear(){
    const choices=[...document.getElementsByClassName('choice')];
    choices.forEach(choice=>{
        container.removeChild(choice)
    })
}