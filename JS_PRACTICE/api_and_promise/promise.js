let promise_1 = new Promise( function(resolve,rejection){
    // Do an async task
    // db call , cryptography , file read, network call

    setTimeout(function(){
        console.log("Async work complete")
        // resolve()
        resolve("Success")
    },1000)
})
// This is creating a promise instance

//  promise is an object

//  Creating a promise instance the creating a promise instance is semilar to creating a new object of an class using a constructor function.

//  promices also reduce the callback hell


promise_1.then(function(){
    console.log("Promise resolved or promised consumed")
})

//  After creating a promise it needs to be consumed or resolved


new Promise(function(resolve,rejection){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 resolved")
})



let promise_3 = new Promise( function(resolve,reject)
{
    setTimeout(function(){
        resolve({ username : "student", email : "student@gmail.com"})   // we can also pass the data to the resolve function
    },1000)
})

promise_3.then(function(user){
    console.log(user)    // we can access the data passed to the resolve function
})


let promise_4 = new Promise(function(resolve,reject ){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "student", email : "student@gmail.com"})
        }
        else{
            reject('EROOR : Something went wrong')
        }
    },1000)
});

//  We can add multiple then() to a promise instance

// let var_2 = promise_4.then( (user) => {
//     console.log(user)
//     return user.username;
// })

// console.log(var_2)  // This method is not recomended

promise_4
.then( (user) => {
    console.log(user)
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Finally the promise is either resolved or rejected")
    //  this stsatement will be executed no matter what

});


let promise_5 = new Promise( function(resolve,reject){
    setTimeout( function() {
        let error = true;
        if(!error){
            resolve({
                username : "student",
                email : "new_student_id@gmail.com"
            })
        }
        else{
            reject("ERROR : JS went wrong")
        }
    },1000)
})


// promise_5.then

// async function new_func()
// {
//     let response = await promise_5    // This will wait for the promise to resolve or reject  
//     console.log(response)
// }
// new_func()


//  async await is a syntactical sugar over the promise it direectly returns the data instead of returning the promise instance means it dont handel the error directly


async function new_func()
{
    try{
        let response = await promise_5    // This will wait for the promise to resolve or reject  
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}


new_func()


// async function get_all_users(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users") 
//     // await will wait for the fetch to complete 
//     // console.log(response)

//     let data = await response.json()  // converting the response to json this operation also takes some time so we will use await
//     console.log(data)
// }


async function get_all_users(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users") 
    // await will wait for the fetch to complete 
    // console.log(response)

    let data = await response.json()  // converting the response to json this operation also takes some time so we will use await
    console.log(data)
    }
    catch(error){
        console.log("E:" ,error)
    }   
}

get_all_users()


// we can execute the same task using the promise .then .catch method

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
//  this is to hanle the returned value we can name it anything let us call it data
.then((data) => {
    console.log(data);
})
.catch((error) => 
    console.log(error)
)
