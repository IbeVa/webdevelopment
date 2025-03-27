const setup = () => {
    slider();
    let myArray = document.getElementsByName("slider");
    let colorDemo = document.getElementById("colorDemo");
    for(let i = 0; i<myArray.length;i++)
    {
        myArray[i].addEventListener("input",slider);
    }

    let btn = document.getElementById("btn");
    btn.addEventListener("click", save);
}
window.addEventListener("load", setup);

const slider = () =>{
    let colorDemo = document.getElementById("colorDemo");
    let sliders =document.getElementsByName("slider")

    colorDemo.style.backgroundColor = "rgb(" + sliders[0].value + "," + sliders[1].value +"," +sliders[2].value + ")";

    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");

    red.textContent = "Red: " + sliders[0].value;
    green.textContent = "Green: " + sliders[1].value;
    blue.textContent = "Blue: " + sliders[2].value;


}


const save = () =>{
        let createElementDIV = document.createElement("div");
        let saves = document.getElementById("saves");
        let sliders =document.getElementsByName("slider");

        createElementDIV.className = "saveColor";
        createElementDIV.style.backgroundColor="rgb(" + sliders[0].value + "," + sliders[1].value +"," +sliders[2].value + ")";
        saves.appendChild(createElementDIV);

        const createBtn = document.createElement("button");
        createBtn.textContent = "x";
        createBtn.className = "button";
        createElementDIV.appendChild(createBtn);

        createBtn.addEventListener("click", removeButton, false);
        createElementDIV.addEventListener("click", color, false);
}

const removeButton = (event) =>{
    event.stopPropagation();
    event.target.parentElement.remove();
}

const color = (event) =>{
    let sliders =document.getElementsByName("slider");
    let colorDemo = document.getElementById("colorDemo");
    colorDemo.style.backgroundColor = event.target.style.backgroundColor;
    let value = event.target.style.backgroundColor.replace("rgb(","").replace(")","");
    let values = value.split(",");
    for(let i = 0; i < values.length; i++){
        values[i] = parseInt(values[i].trim());
    }
    
    sliders[0].value = values[0];
    sliders[1].value = values[1];
    sliders[2].value = values[2];

    slider();
}
