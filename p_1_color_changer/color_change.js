const buttons=document.querySelectorAll('.button');
// console.log(buttons);
const body=document.querySelector('body');

buttons.forEach((button)=>{
    console.log(button);
    // button.addEventListener('click',(e)=>{
    //     // body.style.backgroundColor=button.style.backgroundColor;
    //     // button.addEventListener('click',(e)=>{
            
    //     // })
    //     console.log(e)
    //     console.log(e.target)
    // })
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor='white';
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor='yellow';
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }

        // this is the alternative way tob change the background color
        body.style.backgroundColor=e.target.id;
    })
})