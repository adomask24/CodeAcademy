/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

    fetch(ENDPOINT, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(element => createCard(element))
    });


function createCard(data) {
    const randomProd = data;
    

    const brand = document.createElement('p').innerText = randomProd.brand;
    const brandDiv = document.createElement('div');

    const model = document.createElement('p').innerText = randomProd.models;
    const modelDiv = document.createElement('div');


    const article = document.createElement('article');
    article.classList.add('productCard');

    
    const container = document.getElementById("output");

    brandDiv.append(brand);
    modelDiv.append(model);
    article.append(brandDiv,modelDiv);
    container.append(article);

}
