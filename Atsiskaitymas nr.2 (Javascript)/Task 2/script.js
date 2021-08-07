/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var i = 0;
function postData(e) {
    e.preventDefault();
    
    const outputDiv = document.getElementById("btn__state");
    outputDiv.innerHTML = "";
    
    i=i+1;
    const viewer = document.createElement("p");
    viewer.innerHTML=i;
    btn__state.append(viewer);
}

const button = document.getElementById('btn__element');
button.addEventListener('click', postData);
