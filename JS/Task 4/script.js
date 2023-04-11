/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.querySelector('#output');

fetch(ENDPOINT).then(res => res.json()).then(data => {
    console.log(data);
    data.forEach(entry => {
        const card = document.createElement('div');
        card.classList.add('card');

        const carBrand = document.createElement('h1');
        const carBrandText = document.createTextNode(entry.brand);
        carBrand.appendChild(carBrandText);

        const brandModels = document.createElement('ul');
        entry.models.forEach(model => {
            const newModel = document.createElement('li');
            const newModelText = document.createTextNode(model);
            newModel.appendChild(newModelText);

            brandModels.appendChild(newModel);
        });
        card.append(carBrand, brandModels);
        output.appendChild(card);
    });
});