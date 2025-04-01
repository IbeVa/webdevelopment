const setup = () => {
    bouwJSONString()
}
window.addEventListener("load", setup);

student1 = {
    naam: "Joe",
    familienaam: "Janssens",
    geboorteDatum: new Date("1993-12-31"),
    adres: {
        straat: "Kerkstraat 13",
        postcode: "8500",
        gemeente: "Kortrijk"
    },
    isIngeschreven: true,
    namenVanExen: ["Sofie", "Berta", "Philip", "Alberto"],
    aantalAutos: 2
}

const bouwJSONString = () => {
    let json = JSON.stringify(student1);
    console.log(json);

    let obj = JSON.parse(json);
    console.log(obj.naam);
}

