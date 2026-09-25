const endpoint = `https://kea-alt-del.dk/t7/api/categories`;

const kategoriContainer = document.querySelector("#kategoriContainer");


fetch(endpoint).then(res=>res.json()).then(visData);

function visData(json){
    console.log(json);
    json.forEach(element => {
        kategoriContainer.innerHTML += 
        `<a href=produktliste.html?cat=${encodeURIComponent(element.category)}> ${element.category}
        </a>`
    });
}
