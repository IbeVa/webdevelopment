const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click",herbereken);
}
window.addEventListener("load", setup);

const herbereken = () =>{
    let inputs = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaals");
    let prijzen = document.getElementsByClassName("prijs");
    let totaal = document.getElementById("totaal");

    const prijzenArray = [];
    for(let i = 0; i<prijzen.length;i++)
    {
        let prijs = parseFloat(prijzen[i].textContent.replace(" Euro",""));
        prijzenArray.push(prijs);

    }

    const btwsArray = [];
    for(let i = 0; i<btws.length;i++)
    {
        let btw = parseInt(btws[i].textContent.replace("%",""));
        let groeifactor = btw/100 + 1;
        btwsArray.push(groeifactor);

    }

    const aantalArray = [];

    for(let i = 0; i<inputs.length;i++)
    {
        let aantal = inputs[i].value;
        aantalArray.push(aantal);
    }

    let totaalBedrag = 0.00;
    for(let i = 0; i<subtotalen.length;i++)
    {
        subtotalen[i].textContent = (prijzenArray[i]*aantalArray[i]*btwsArray[i]).toFixed(2) + " Euro";
        totaalBedrag += parseFloat(subtotalen[i].textContent.replace("Euro",""));
    }

    totaal.textContent = totaalBedrag.toFixed(2) + " Euro";
}
