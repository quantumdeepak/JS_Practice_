const form =document.querySelector('form');

// console.log(form);

// this use case load empty value
// let height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let height=parseInt(document.querySelector('#height').value)
    let weight=parseInt(document.querySelector('#weight').value)
    let result=document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML=`Please enter the valid Height value ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML=`Please enter the valid Weight value ${weight}`;
    }
    else{
       let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the result   
        result.innerHTML = `the bmi is ${bmi}`;
        
    }
    
    // if (height === '' || height < 0 || isNaN(height)) {
    //     results.innerHTML = `Please give a valid height ${height}`;
    //   } else if (weight === '' || weight < 0 || isNaN(weight)) {
    //     results.innerHTML = `Please give a valid weight ${weight}`;
    //   } else {
    //     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //     //show the result
    //     results.innerHTML = `<span>${bmi}</span>`;
    //   }



})

