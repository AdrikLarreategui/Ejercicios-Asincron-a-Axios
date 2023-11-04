const buttonData = document.querySelector('#getUsersGlobal')
const container = document.querySelector('#container');

let users = [];

const getData = () => {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => { 
            users = res.data;
            console.log(users);
            users.forEach((item)=> {
            container.innerHTML += `<h1>${item.name}</h1>`
        }) 
            const { data } = res //Imprimir por consola lista de usuarios y nombre de usuarios (solamente)
            console.log(data);
            data.forEach((item) => {
            console.log(item.name);
            })
        })
        .catch((error) => console.error(error))
}

const showGlobalVar = () => { console.log(users); } 
getData();

// const buttonData = document.querySelector('#getUsersGlobal')
// const container = document.querySelector('#container');

// let users = [];

// const getData = () => {
//   axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//         users = res.data;
//         //3. console.log(users);
//      users.forEach((item)=> {
//         container.innerHTML += `<h1>${item.name}</h1>`
//       })
//     //1 y 2.
//       const { data } = res
//       console.log(data);
//       data.forEach((item) => {
//       console.log(item.name);
//       })
//     })
//     .catch((err) => console.error(err))
// }

// const mostrarVariableGlobal = () => { console.log(users); }
// getData();