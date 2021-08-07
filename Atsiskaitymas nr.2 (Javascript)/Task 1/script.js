/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function postData(e) {
    e.preventDefault();
    const massInKg  = document.querySelector(".input").value;
    
    if (massInKg==""){
            alert("Nebejuokink, ivesk skaiciu!!! :D");
        } else if (isNaN(massInKg)){
            alert("Vel juokini, kaip as Tau paskaiciuosiu jei neivedi skaiciaus? :D Ziurek ka ivedei: "+massInKg);
        } else {
            
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "";

            const massInLb = document.createElement("h1");
            massInLb.innerText=massInKg*2.2046 + " svarai";
            outputDiv.append(massInLb);

            const massInG = document.createElement("h1");
            massInG.innerText=massInKg/0.001 + " gramai";
            outputDiv.append(massInG);

            const massInOz = document.createElement("h1");
            massInOz.innerText=massInKg*35.274 + " uncijos";
            outputDiv.append(massInOz);
        }
}

const formAction = document.querySelector('.form1');
formAction.addEventListener('submit', postData);