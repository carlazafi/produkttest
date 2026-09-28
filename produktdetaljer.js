

const id = new URLSearchParams(window.location.search).get("id");

console.log("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const produkt = document.querySelector("#produktcontainer");


const tilbageknap = document.querySelector("#tilbageknap");
tilbageknap.addEventListener("click", () => history.back());


fetch(endpoint).then(res=>res.json()).then(visData);

function visData(element) {
    console.log(element);
    const tilbudspris = Math.round(element.price - (element.price * element.discount / 100));
        produkt.innerHTML = 
        `<article id="produkt">
        <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede" />
        <div>    
        <h2>${element.productdisplayname}</h2>
            <h3>${element.brandname}</h3>
            ${element.discount ? `<p class='tilbudslabel'>-${element.discount}%</p>
                <p>Før DKK ${element.price},- Nu ${tilbudspris} DKK,-</p>` 
                : `<p>DKK ${element.price},-</p>`}
            <p>${element.usagetype}</p>
             </div> 
        </article>
        </a>`
    };