const setup = () => {
    const btn = document.getElementById("btnSubstr");
    btn.addEventListener("click",substring);
}
window.addEventListener("load", setup);

const substring = () =>{
    let txt = document.getElementById("txt").value;
    let beginIndex = document.getElementById("beginIndex").value;
    let eindIndex = document.getElementById("eindIndex").value;
    let txtOutput = document.getElementById("txtOutput");

    let substring = txt.substring(beginIndex, eindIndex);
    txtOutput.innerHTML = substring;

}

