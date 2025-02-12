const familieLeden = ["Elias","Ibe","Klaas","Virginie","Wolf"];

console.log(familieLeden.length);

for(let i = 0; i<familieLeden.length; i=i+2){
    console.log(familieLeden[i]);
}

const voegNaamToe = () =>{
    let naam = window.prompt("Wat is uw naam?", "onbekend");
    familieLeden.push(naam);
    console.log(familieLeden);
}

voegNaamToe();

console.log(familieLeden.join(" - "));
