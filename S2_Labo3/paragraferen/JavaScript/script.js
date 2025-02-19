const setup = () => {
    let text = document.getElementsByClassName("belangrijk");
    for(let i = 0; i<text.length;i++)
    {
        text[i].className = ("belangrijk opvallend");
    }
}
window.addEventListener("load", setup);

