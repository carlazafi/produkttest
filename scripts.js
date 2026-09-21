const biler = [{
    pris: 23000,
    model: "Turbo",
    brand: "Lada",
    farve: "blå",
    udstyr: ["rat", "sæder", "vinduer"]
},
{
    pris: 15000,
    model: "Alfa",
    brand: "Skoda",
    farve: "rød",
    udstyr: ["rat", "sæder", "vinduer"]
},
{
  pris: 3000,
    model: "Hello",
    brand: "Vovlo",
    farve: "sølv",
    udstyr: ["rat", "sæder", "vinduer", "ac"]
}
]

//console kan flyttes rundt og bruges til at teste om vores JS går igennem. amn skal undgå at have flere af dem, men blot genbruge den ene, hvis muligt, da de fylder meget

console.log(biler);

const produktliste = document.querySelector(".produktliste");

biler.forEach(visBiler)

function visBiler(bil) {
produktliste.innerHTML += `<article class=".card">
            <h2>${bil.brand}</h2>
            <h3>${bil.model}</h3>
            <p>${bil.pris}</p>
            <p>${bil.udstyr}</p>
        </article>`
}

