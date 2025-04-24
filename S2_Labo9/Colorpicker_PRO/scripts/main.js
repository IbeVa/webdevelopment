let global = {
    red: 0,
    green: 0,
    blue: 0,
    saves: []
}


const setup = () => {

    let saves = document.getElementById("saves");
    let opgeslagenRGB = JSON.parse(localStorage.getItem("opslagKleuren"));
    if (opgeslagenRGB) {
        global.saves = opgeslagenRGB.saves;
        let sliders = document.getElementsByName("slider");
        sliders[0].value = opgeslagenRGB.red;
        sliders[1].value = opgeslagenRGB.green;
        sliders[2].value = opgeslagenRGB.blue;

        for(let i = 0; i<opgeslagenRGB.saves.length; i++){
            let savedColor = opgeslagenRGB.saves[i];
            let createElementDIV = document.createElement("div");

            createElementDIV.className = "saveColor";
            createElementDIV.style.backgroundColor = savedColor;
            saves.appendChild(createElementDIV);

            const createBtn = document.createElement("button");
            createBtn.textContent = "x";
            createBtn.className = "button";
            createElementDIV.appendChild(createBtn);

            createBtn.addEventListener("click", removeButton, false);
            createElementDIV.addEventListener("click", color, false);
        }
    }


    slider();


    let myArray = document.getElementsByName("slider");
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].addEventListener("input", slider);
    }

    let btn = document.getElementById("btn");
    btn.addEventListener("click", save);
}
window.addEventListener("load", setup);

const slider = () => {
    let colorDemo = document.getElementById("colorDemo");
    let sliders = document.getElementsByName("slider")


    colorDemo.style.backgroundColor = "rgb(" + sliders[0].value + ", " + sliders[1].value + ", " + sliders[2].value + ")";

    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");

    red.textContent = "Red: " + sliders[0].value;
    green.textContent = "Green: " + sliders[1].value;
    blue.textContent = "Blue: " + sliders[2].value;

    global.red = sliders[0].value;
    global.green = sliders[1].value;
    global.blue = sliders[2].value;

    storage();

}


const save = () => {
    let createElementDIV = document.createElement("div");
    let saves = document.getElementById("saves");
    let sliders = document.getElementsByName("slider");

    createElementDIV.className = "saveColor";
    let colorValue = "rgb(" + sliders[0].value + ", " + sliders[1].value + ", " + sliders[2].value + ")"
    createElementDIV.style.backgroundColor = colorValue;
    saves.appendChild(createElementDIV);

    const createBtn = document.createElement("button");
    createBtn.textContent = "x";
    createBtn.className = "button";
    createElementDIV.appendChild(createBtn);

    createBtn.addEventListener("click", removeButton, false);
    createElementDIV.addEventListener("click", color, false);

    global.saves.push(colorValue);
    console.log(global.saves)


    storage();
}

const removeButton = (event) => {

    let rmvColor = event.target.parentElement.style.backgroundColor
    let index = global.saves.indexOf(rmvColor);
    if(index !== -1){
        global.saves.splice(index, 1)
    }
    event.stopPropagation();
    event.target.parentElement.remove();


    storage();
}

const color = (event) => {
    let sliders = document.getElementsByName("slider");
    let colorDemo = document.getElementById("colorDemo");
    colorDemo.style.backgroundColor = event.target.style.backgroundColor;
    let value = event.target.style.backgroundColor.replace("rgb(", "").replace(")", "");
    let values = value.split(",");
    for (let i = 0; i < values.length; i++) {
        values[i] = parseInt(values[i].trim());
    }

    sliders[0].value = values[0];
    sliders[1].value = values[1];
    sliders[2].value = values[2];

    slider();
}

const storage = () => {
    localStorage.setItem("opslagKleuren", JSON.stringify(global));
}