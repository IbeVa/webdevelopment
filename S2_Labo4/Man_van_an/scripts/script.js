const setup = () => {
    zoekTerm();
    zoekTermLastIndexOf();
}

window.addEventListener("load", setup);

const zoekTerm = () =>{
    let text = "De man van An geeft geen hand aan ambetante verwanten";
    let indexOf = document.getElementById("indexOf");
    let count = 0;
    let index = 0;
    while (text.indexOf("an", index) !== -1){
        count++;
        index = text.indexOf("an", index)+1;
    }

    indexOf.textContent += count;


    console.log(count);
}

const zoekTermLastIndexOf = () =>{
    let text = "De man van An geeft geen hand aan ambetante verwanten";
    let lastIndexOf = document.getElementById("lastIndexOf");
    let count = 0;
    let index = text.lastIndexOf("an");
    while(text.lastIndexOf("an", index) !== -1)
    {
        count++;
        index = text.lastIndexOf("an", index) -1;
    }

    lastIndexOf.textContent += count;

    console.log(count);
}


