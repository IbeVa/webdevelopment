const setup = () => {
    slider();
    let myArray = document.getElementsByName("slider");
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

        createBtn.addEventListener("click", removeButton);
}

const removeButton = (event) =>{
    event.target.parentElement.remove();

}