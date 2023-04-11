/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const weightForm = document.querySelector('form');
const output = document.querySelector('#output');

weightForm.addEventListener('submit', e => {
    e.preventDefault();
    const kilograms = e.target.search.value;

    output.innerHTML = "";

    const newPounds = document.createElement('p');
    const newPoundsText = document.createTextNode(`Pounds: ${kilograms*2.2046}lb`);
    newPounds.appendChild(newPoundsText);

    const newGrams = document.createElement('p');
    const newGramsText = document.createTextNode(`Grams: ${kilograms/0.001}g`);
    newGrams.appendChild(newGramsText);

    const newOunces = document.createElement('p');
    const newOuncesText = document.createTextNode(`Ounces: ${kilograms*35.274}oz`);
    newOunces.appendChild(newOuncesText);

    output.append(newPounds, newGrams, newOunces);
});