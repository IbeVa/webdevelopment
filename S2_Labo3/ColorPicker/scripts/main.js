const setup = () => {
    slider();
    let myArray = document.getElementsByName("slider");
    for(let i = 0; i<myArray.length;i++)
    {
        myArray[i].addEventListener("input",slider);
    }
}
window.addEventListener("load", setup);

const slider = () =>{
    let colorDemo = document.getElementById("colorDemo");
    let sliders =document.getElementsByName("slider")

    colorDemo.style.backgroundColor = "rgb(" + sliders[0].value + "," + sliders[1].value +"," +sliders[2].value + ")";

    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");

    red.innerHTML = "Red: " + sliders[0].value;
    green.innerHTML = "Green: " + sliders[1].value;
    blue.innerHTML = "Blue: " + sliders[2].value;


}
