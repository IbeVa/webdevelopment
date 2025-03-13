const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboorteDatum();
    valideerEmail()
    valideerKinderen();

    if(valideerVoornaam() && valideerFamilienaam() && valideerGeboorteDatum() && valideerEmail() && valideerKinderen()){
        window.alert("Proficiat");
    }
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className = "invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
        return false;
    } else {
        txtVoornaam.className = ""; // alle classes verwijderen
        errVoornaam.innerHTML = "";
    }

    return true;
};

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    let errMessage = document.getElementById("errFamilienaam");

    if (familienaam.length > 50) {
        txtFamilienaam.className = "invalid";
        errMessage.textContent = "max. 50 karakters";
        return false;
    } else {
        txtFamilienaam.className = "";
        errMessage.textContent = "";
    }

    if (familienaam.length === 0) {
        txtFamilienaam.className = "invalid";
        errMessage.textContent = "verplicht veld";
    }

    return true;

}

const valideerGeboorteDatum = () => {
    let date = document.getElementById("geboortedatum");
    let errMessage = document.getElementById("errGeboortedatum");
    let geboortedatum = date.value.trim();
    let patroon = /^\d{4}-\d{2}-\d{2}$/;
    if (patroon.test(geboortedatum)) {
        date.className = "";
        errMessage.textContent = "";
    } else {
        date.className = "invalid";
        errMessage.textContent = "formaat is niet jjjj-mm-dd";
        return false;
    }

    if (geboortedatum.length === 0) {
        date.className = "invalid";
        errMessage.textContent = "verplicht veld";
        return false;
    }

    return true;


}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();
    let errMessage = document.getElementById("errEmail");
    let patroon = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
    if (email.length === 0) {
        txtEmail.className = "invalid";
        errMessage.textContent = "Verplicht veld";
        return false;
    }   

    if(patroon.test(email)){
        txtEmail.className = "";
        errMessage.textContent = "";
    } else {
        txtEmail.className = "invalid";
        errMessage.textContent = "Geen geldig email adres";
        return false;
    }

    return true;
}

const valideerKinderen = () => {
    let txtAantal = document.getElementById("txtAantal");
    let aantal = txtAantal.value.trim();
    let errMessage = document.getElementById("errAantal");


    if (parseInt(aantal) <= 99 || aantal === "") {
        if (!isGetal(aantal) || parseInt(aantal) < 0 || aantal ==="") {
            txtAantal.className = "invalid";
            errMessage.textContent = "is geen positief getal";
            return false;
        } else {
            txtAantal.className = "";
            errMessage.textContent = "";
        }
    } else {
        txtAantal.className = "invalid";
        errMessage.textContent = "is te vruchtbaar";
        return false;
    }
    return true;
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}
window.addEventListener("load", setup);