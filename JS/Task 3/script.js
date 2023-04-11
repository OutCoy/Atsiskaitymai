/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsers = document.querySelector('#btn');
const output = document.querySelector('#output');

showUsers.addEventListener('click', () => {
    fetch(ENDPOINT).then(res => res.json()).then(data => {
        console.log(data);

        output.innerHTML = "";
        data.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.setAttribute('src', user.avatar_url);
            cardImage.setAttribute('alt', 'Profile picture');

            const cardLogin = document.createElement('h3');
            const cardLoginText = document.createTextNode(user.login);
            cardLogin.appendChild(cardLoginText);

            card.append(cardImage, cardLogin);

            output.appendChild(card);
        });
    });
});