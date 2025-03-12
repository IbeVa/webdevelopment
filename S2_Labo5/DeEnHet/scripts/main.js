const setup = () => {
    lidwoord("Gisteren zat de jongen op de stoep en at de helft van de appel");
}
window.addEventListener("load", setup);


const lidwoord = (parameter) => {
    let text = parameter;
    const arrayTxt = [];
    let start = 0;
    let idx = 0;

    for(let i = 0; i < text.length; i++){
        if(text.substring(i, i+1) === " "){
            arrayTxt.push(text.substring(start,i));
            start = start + arrayTxt[idx].length + 1;
            idx++;
        }
    }
    arrayTxt.push(text.substring(start));
    console.log(arrayTxt);

    for(let i = 0; i < arrayTxt.length; i++){
        if(arrayTxt[i] === "de"){
            arrayTxt[i] = "het";
        }else if(arrayTxt[i] === "De"){
            arrayTxt[i] = "Het";
        }
    }
    console.log(arrayTxt);

    let string = arrayTxt.join(" ");
    console.log(string.trim());
}