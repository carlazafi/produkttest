const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const produktliste = document.querySelector("#produktliste");



const h2 = document.querySelector("h2");
h2.textContent = cat;

fetch(endpoint).then(res=>res.json()).then(visData);

function visData(json){
    console.log(json);
    json.forEach(element => {
        produktliste.innerHTML += 
        `<a class="card" href=produktdetaljer.html?id=${element.id}>
        <article class="card">
        <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede" />
            <h2>${element.productdisplayname}</h2>
            <h3>${element.brandname}</h3>
            <p>${element.price}</p>
            <p>${element.category}</p>
        </article>
        </a>`
    });
}

const tilbageknap = document.querySelector("#tilbageknap");
tilbageknap.addEventListener("click", () => history.back());
