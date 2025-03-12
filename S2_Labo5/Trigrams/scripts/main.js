const setup = () => {
    let txt = "onoorbaar";


    for(let i = 0; i < txt.length; i++){
        if(txt.substring(i,i+3).length === 3) {
            console.log(txt.substring(i, i + 3));
        }
    }
}
window.addEventListener("load", setup);