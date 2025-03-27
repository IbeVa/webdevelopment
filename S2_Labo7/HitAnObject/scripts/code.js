let global = {
    IMAGE_COUNT: 5,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0
};


const setup = () => {
    let btn = document.getElementById("btn");
    console.log(global.timeoutId)
    btn.addEventListener("click", setTimer);

};

const imgClick = () => {
    let image = document.getElementsByTagName("img")[0];
    let xCord = Math.random() * (600 - image.width);
    let yCord = Math.random() * (800 - image.height);

    console.log(xCord);
    console.log(yCord);

    let randomImg = Math.random() * 5;
    let roundRandomGetal = Math.floor(randomImg);


    let path = global.IMAGE_PATH_PREFIX + roundRandomGetal + global.IMAGE_PATH_SUFFIX;

    image.setAttribute("src", path);
    image.setAttribute("id", "target");
    image.style.top = yCord + "px";
    image.style.left = xCord + "px";


}

const setTimer = () => {
    if (global.timeoutId === 0) {

        global.timeoutId = setInterval(imgClick, global.MOVE_DELAY);
        let image = document.getElementsByTagName("img")[0];
        image.addEventListener("click", alertEvent);
        image.addEventListener("click", imgClick);
    }
}


const alertEvent = (event) => {
    let srcAttribuut = event.target.getAttribute("src");
    let replace = srcAttribuut.replace(global.IMAGE_PATH_PREFIX, "").replace(global.IMAGE_PATH_SUFFIX, "");
    let aantalHits = document.getElementById("aantal");
    let image = document.getElementsByTagName("img")[0];


    if (replace === "0") {
        window.alert("GAME OVER\nAantal hits: " + global.score);
        clearInterval(global.timeoutId);
        global.score = 0;
        global.timeoutId = 0;
        aantalHits.textContent = global.score;
        image.removeEventListener("click", alertEvent);
        image.removeEventListener("click", imgClick);
        image.style.top = 0 + "px";
        image.style.left = 0 + "px";
    } else {
        global.score += 1;
        aantalHits.textContent = global.score;
    }


}

window.addEventListener("load", setup);




