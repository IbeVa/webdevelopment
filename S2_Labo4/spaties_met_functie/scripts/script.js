const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", spaties);
}
window.addEventListener("load", setup);

const maakMetSpaties = (inputText) => {
    let geenSpaties = inputText.replaceAll(" ","");
    let splitString = geenSpaties.split("").join(" ");
    return splitString;
}

const spaties = ()=>{
    let inputTxt = document.getElementById("input").value;
    let maakSpaties = maakMetSpaties(inputTxt);
    console.log(maakSpaties);
}