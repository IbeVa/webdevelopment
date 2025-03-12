const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", form);
}
window.addEventListener("load", setup);

const form = () => {
    let checked = document.getElementById("isRoker").checked;
    if(checked){
        console.log("Is een roker");
    }else{
        console.log("Is geen roker");
    }

    let radioBtnChecked = document.getElementsByName("language");
    for(let i = 0; i < radioBtnChecked.length;i++){
        if(radioBtnChecked[i].checked){
            console.log("Moedertaal is " + radioBtnChecked[i].value);
        }
    }

    let selected = document.getElementById("buurlanden").options;
    for(let i = 0; i < selected.length; i++){
        if (selected[i].selected){
            console.log("Favoriete buurland is " + selected[i].value);
        }
    }

    let bestelling = document.getElementById("bestelling").options;
    let s = "Bestelling bestaat uit "
    let erZijnGeselecteerd = false;
    for(let i = 0;i < bestelling.length; i++){
        if(bestelling[i].selected){
            s += bestelling[i].value + " ";
            erZijnGeselecteerd = true;
        }
    }

    if(erZijnGeselecteerd === false){
        console.log("Er is geen bestelling");
    }
    else
    {
        console.log(s);
    }


}