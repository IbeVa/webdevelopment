const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", print)
}
window.addEventListener("load", setup);

const print = () => {
    let input = document.getElementById("input").value;
    let geenSpaties = input.replaceAll(" ","");
    let splitString = geenSpaties.split("").join(" ");
    console.log(splitString)

}