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
            const { data } = res 
            console.log(data);
            data.forEach((item) => {
            console.log(item.name);
            })
        })
        .catch((error) => console.error(error))
}

const showGlobalVar = () => { console.log(users); } 
getData();

