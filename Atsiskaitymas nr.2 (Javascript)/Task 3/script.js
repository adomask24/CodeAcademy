/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';



function postData(e) {
    e.preventDefault();


    fetch(ENDPOINT, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(element => createCard(element))
    });


function createCard(data) {
    const randomProd = data;
    

    const message = document.getElementById("message");
    message.innerHTML = "";

    const login = document.createElement('p').innerText = randomProd.login;
    const loginDiv = document.createElement('div');

    const url = document.createElement('p').innerText = randomProd.url;
    const urlDiv = document.createElement('div');


    const article = document.createElement('article');
    article.classList.add('productCard');

    
    const container = document.getElementById("output");

    loginDiv.append(login);
    urlDiv.append(url);
    article.append(loginDiv,urlDiv);
    container.append(article);

}
}

const button = document.getElementById('btn');
button.addEventListener('click', postData);