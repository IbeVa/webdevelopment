const setup = () => {
    const element = document.getElementById("myButton");
    element.addEventListener("click", button);
}
window.addEventListener("load", setup);

const button = () =>{
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welcome!";
}

