const tafelVeld = document.getElementById("tafel");
const lijst = document.getElementById("lijst");
const oefenVeld = document.getElementById("oefentafel");
const oefenen = document.getElementById("oefenen");
const som = document.getElementById("som");
const antwoord = document.getElementById("antwoord");
const melding = document.getElementById("melding");

let oplossing;

function toonTafel() {
    const tafel = Number(tafelVeld.value);
    let regels = "";

    for (let i = 1; i <= 10; i++) {
        regels += `${i} x ${tafel} = ${i * tafel}\n`;
    }

    lijst.textContent = regels;
}

function maakSom() {
    const tafel = Number(oefenVeld.value);
    const getal = Math.floor(Math.random() * 10) + 1;

    oplossing = getal * tafel;
    som.textContent = `${getal} x ${tafel} = ?`;
    antwoord.value = "";
    melding.textContent = "";
    oefenen.hidden = false;
    antwoord.focus();
}

function controleer() {
    if (Number(antwoord.value) === oplossing) {
        melding.textContent = "Goed gedaan!";
        melding.className = "mt-2 mb-0 text-success";
    } else {
        melding.textContent = "Probeer het nog eens.";
        melding.className = "mt-2 mb-0 text-danger";
    }
}
