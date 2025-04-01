let personen = [];
let index = -1.

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", aanpassenPersoon);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    let rmvBtn = document.getElementById("rmvPersoon");
    rmvBtn.addEventListener("click", removePersoon)
};

window.addEventListener("load", setup);


// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let list = document.getElementById("lstPersonen");
    let optionElement = document.createElement("option");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien ok, bewaar de ingegeven data.
    if (valideer()) {
        let voornaam = document.getElementById("txtVoornaam").value.trim();
        let familienaam = document.getElementById("txtFamilienaam").value.trim();
        let email = document.getElementById("txtEmail").value.trim();
        let aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();
        let geboorte = document.getElementById("txtGeboorteDatum").value.trim();

        let i =0;
        gevonden = false;
        if(personen.length !== 0) {
            while (gevonden === false && i <personen.length) {
                if (personen[i].naam === voornaam && personen[i].familienaam === familienaam
                        && personen[i].email === email && personen[i].aantalKinderen === aantalKinderen && personen[i].geboorteDatum === geboorte) {
                    gevonden = true;
                }
                i++;
            }
        }

        if(!gevonden && index ===-1) {
            personen.push({
                naam: voornaam,
                familienaam: familienaam,
                email: email,
                aantalKinderen: aantalKinderen,
                geboorteDatum: geboorte
            });
            optionElement.setAttribute("id", personen.length-1);
            optionElement.textContent = voornaam + " " + familienaam;
            list.appendChild(optionElement);
            bewerkNieuwePersoon();

        }else{
            personen[index].naam = voornaam;
            personen[index].familienaam = familienaam;
            personen[index].email = email;
            personen[index].aantalKinderen = aantalKinderen;
            personen[index].geboorteDatum = geboorte;
            list.options[index].textContent = voornaam + " " + familienaam;
            list.options.selectedIndex = -1;
            bewerkNieuwePersoon();
        }
    }

    index = -1;
    // een nieuw aangemaakte persoon voegen we toe
    // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

};

const aanpassenPersoon = (event) =>{
    let id = event.target.options;
    let idNummer = id.selectedIndex;
    let persoonObj = personen[idNummer];

    document.getElementById("txtVoornaam").value = persoonObj.naam;
    document.getElementById("txtFamilienaam").value =persoonObj.familienaam;
    document.getElementById("txtEmail").value = persoonObj.email;
    document.getElementById("txtAantalKinderen").value =persoonObj.aantalKinderen;
    document.getElementById("txtGeboorteDatum").value = persoonObj.geboorteDatum;
    index = idNummer;
}


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
};

const removePersoon = () =>{
    let list = document.getElementById("lstPersonen");
    let selectedIndex = list.options.selectedIndex;

    if(selectedIndex >= 0){
        personen.splice(selectedIndex, 1);
        list.options.remove(selectedIndex);
        bewerkNieuwePersoon();
        index = -1;
    }
}

