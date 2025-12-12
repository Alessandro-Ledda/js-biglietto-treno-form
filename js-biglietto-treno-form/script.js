//PARTE DI PREPARAZIONE

//SELEZIONO TUTTI I CAMPI (INPUT/SELECT)
const nameField = document.getElementById("user-name");
const courseField = document.getElementById("course");
const choiceField = document.getElementById("choice");
const buttonActive = document.getElementById("button");



//SELEZIONO TUTTI GLI ELEMENTI DI PAGINA RELATIVI AI CAMPI
const tabName = document.getElementById("tab-name");
const tabOfferta = document.getElementById("tab-offerta");
const tabCarrozza = document.getElementById("tab-carrozza");
const tabCp = document.getElementById("tab-cp");
const tabCosto = document.getElementById("tab-costo");

//RICHIAMO FORM DA HTML --- SELEZIONO IL FORM DI RIFERIMENTO
const form = document.querySelector("form")
console.log("form inviato")

//RICHIAMO TABELLA 
const table = document.getElementById("table-info")

//RICHIAMO BOTTONE DI RESET
const buttonReset = document.getElementById("reset")



//CALCOLO SCONTO
//ELABORAZOINE

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //CALCOLO LA TARIFFA IN EURO (CONVERTO I KM IN EURO ; 021$ A KM)
    const prezzoKm = 0.21;

    //INIZIALIZZAZIONE COSTANTI PER CONDIZIONE
    //let risultato;
    let trattaInt = parseInt(courseField.value);
    let prezzoTrattaTot = trattaInt * prezzoKm;
    let messaggio;
    //console.log(prezzoTrattaTot)



    //VERIFICO ETA' E CALCOLO SCONTO
    //SE USER HA ETA'<= A 18 (SCONTO 20%)
    if (choiceField.value === "minor") {
        //applica sconto del 20%
        const prezzoScontato = prezzoTrattaTot * 0.80;
        //risultato = `il costo del tuo biglietto è scontato del 20% e corrisponde a ${prezzoScontato.toFixed(2)}€`;
        messaggio = "sconto 20%";
        //console.log(prezzoScontato + " " + "euro")
        //SE USER HA ETA'>= A 65 (SCONTO 40%)
    } else if (choiceField.value === "major+") {
        const prezzoScontato = prezzoTrattaTot * 0.60;
        //risultato = `il costo del tuo biglietto è scontato del 40% e corrisponde a ${prezzoScontato.toFixed(2)}€`;
        messaggio = "sconto 40%"
        //console.log(prezzoScontato + " " + "euro")
    } else {
        //risultato = `Il costo del biglietto è ${prezzoTrattaTot.toFixed(2)}€`;
        messaggio = "Biglietto standard";
        //console.log(prezzoTrattaTot)
    }

    //console.log(risultato);



    //STAMPO IL RISULTATO SU HTML
    //document.getElementById("risultato").innerHTML = risultato;

    //da un range (1,5) fornisco un numero random
    const carrozzaRandom = Math.floor(Math.random() * 5) + 1;
    console.log(carrozzaRandom);

    //da un range(0,13) fornisco un numero di 13 cifre random
    function generaStringa13Cifre() {
        let risultatoStringa = '';
        for (let i = 0; i < 13; i++) {
            // Math.random() * 10 genera un numero tra 0 e 9.99...
            // Math.floor() lo arrotonda all'intero più vicino (0-9)
            const cifra = Math.floor(Math.random() * 10);
            risultatoStringa += cifra; // Aggiunge la cifra alla stringa
        }
        return risultatoStringa;
        
    }
    console.log(generaStringa13Cifre());

    //PARTE DI 0UTPUT
    tabName.innerText = nameField.value;
    tabOfferta.innerText = messaggio;
    tabCarrozza.innerText = carrozzaRandom;
    tabCp.innerText = generaStringa13Cifre();
    tabCosto.innerText =`${prezzoTrattaTot.toFixed(2)}€`;

    //TOLGO LA CLASSE  DISPLAY A TABELLA DATI UTENTE
    table.classList.remove("display");

})

buttonReset.addEventListener("click", ()=>{
    form.reset();
    table.classList.add("display");
});