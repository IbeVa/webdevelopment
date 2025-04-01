const setup = () => {
    berekenDagen();
}
window.addEventListener("load", setup);

const berekenDagen = () =>{
    let dateNow = new Date();
    let geboorteDatum = new Date(2006,1,7);
    let aantalDagenInMilliseconden = dateNow - geboorteDatum;
    let aantalDagen = Math.floor(aantalDagenInMilliseconden/(1000*60*60*24));
    console.log(dateNow);
    console.log(geboorteDatum);
    console.log("Aantal dagen oud: " + aantalDagen + " dagen!");
    let body = document.querySelector("body");
    let pElement = document.createElement("p");
    pElement.textContent = "Aantal dagen oud: " + aantalDagen + " dagen!";
    body.appendChild(pElement);

}