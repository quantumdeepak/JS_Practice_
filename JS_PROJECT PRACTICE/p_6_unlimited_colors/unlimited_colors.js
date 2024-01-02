// Generating random colors

let fun_color = function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

// console.log(fun_color());


let  inherval_id;

let start_color_change = function(){
    //  set interval will call the function 
    // we can add an addetional function to cchange the color and we can pass that function to setInterval
    if(!inherval_id){interval_id=setInterval(function(){
        document.querySelector('body').style.backgroundColor=fun_color();
    },1000);}
    
};


let stop_color_change = function(){
    clearInterval(interval_id);
    inherval_id=null
};


document.querySelector('#start').addEventListener('click',start_color_change);
document.querySelector('#stop').addEventListener('click',stop_color_change);