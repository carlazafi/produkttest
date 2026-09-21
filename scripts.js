const bil1 = {
    pris: 23000,
    model: "Turbo",
    brand: "Lada",
    farve: "blå",
    udstyr: ["rat", "sæder", "vinduer"]
}

const bil2 = {
    pris: 15000,
    model: "Alfa",
    brand: "Skoda",
    farve: "rød",
    udstyr: ["rat", "sæder", "vinduer"]
}

//console kan flyttes rundt og bruges til at teste om vores JS går igennem. amn skal undgå at have flere af dem, men blot genbruge den ene, hvis muligt, da de fylder meget

console.log(bil1);
console.log(bil2);

const card = document.querySelector(".card")

card.innerHTML = `<h2>${bil1.brand} ${bil1.model}</h2>`