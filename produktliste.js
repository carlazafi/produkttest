const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}&limit=30`;

const produktliste = document.querySelector("#produktliste");


const h2 = document.querySelector("h2");
h2.textContent = cat;

const tilbageknap = document.querySelector("#tilbageknap");
tilbageknap.addEventListener("click", () => history.back());

document.querySelectorAll("#filtre button").forEach(knap=>knap.addEventListener("click", filtrer));

let alleData, udsnit;

fetch(endpoint).then(res => res.json()).then(data => { alleData = udsnit = data; visData(data); });

function filtrer(e) {
    console.log(e.target.textContent);
    const valgt = e.target.textContent;
    if (valgt == "Alle") {
        udsnit = alleData; 
    }else { 
        udsnit = alleData.filter(element => element.gender == valgt); 
    }
    visData(udsnit);
}

const visantal = document.querySelector("#filtre span");

function visData(json){
    visantal.textContent = json.length;
    produktliste.innerHTML = ""; 
    json.forEach(element => {
        const tilbudspris = Math.round(element.price - (element.price * element.discount / 100));
        produktliste.innerHTML += 
        ` <a class="card ${element.soldout ? "udsolgt" : ""}" href=produktdetaljer.html?id=${element.id}>
        <article class="card">
        <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede" />
            <h2>${element.productdisplayname}</h2>
            <h3>${element.brandname}</h3>
            ${element.discount ? `<p class='tilbudslabel'>-${element.discount}%</p>
                <p><span class="førpris">Før DKK ${element.price},-</span> Nu DKK ${tilbudspris},-</p>` 
                : `<p>DKK ${element.price},-</p>`}
            <p>${element.usagetype}</p>
        </article>
        </a>`
    });
}


