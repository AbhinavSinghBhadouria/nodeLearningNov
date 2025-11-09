// In industries level axios is mostly used not fetch.

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response=>{
//         const json = await response.json();
//         console.log(json.todos.length);
//         // await response.text()
//     })
// }


// async function main(){
//     const response= await axios.get("https://sum-server.100xdevs.com/todos");
//     console.log(response.data.todos.length);
// }

// main();



// by default the request that goes is get but if we want to send the POST request then we need to specify the method type.
// function main(){
//     fetch("https://sum-server.100xdevs.com/todos",{
//       method: "POST"
//            }) ;
//     .then(async response=>{
//         const json = await response.json();
//         console.log(json.todos.length);
//         // await response.text()
//     })
// }


// in case of axios we can simply change 
// async function main(){
//     const response= await axios.post("https://sum-server.100xdevs.com/todos"); // in this line post,put , delete , get anything
//     console.log(response.data.todos.length);
// }

// main();