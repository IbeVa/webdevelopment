const setup = () => {
    opdracht1();
}
window.addEventListener("load", setup);

const opdracht1 = () =>{
    let element = document.querySelectorAll("p")[0];
    element.textContent = "Good job!";
}