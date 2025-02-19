const setup = () => {
    let btns = document.getElementsByClassName("btn");

    btns[0].addEventListener("click", clickButton);
    btns[1].addEventListener("click", clickButton);
    btns[2].addEventListener("click", clickButton);

}
window.addEventListener("load", setup);

const clickButton = (e) => {
    e.target.classList.toggle("pressed")

}

