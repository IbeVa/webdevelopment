let global = {
    global_id: 0
}

const setup = () => {
    let opgeslagenData = localStorage.getItem("startPage");
    if(opgeslagenData){
        let toObject = JSON.parse(opgeslagenData)
        global.global_id = 0;
        for(let i = 0; i<toObject.length; i++) {
            let item = toObject[i];

            if(item.data_id >= global.global_id){
                global.global_id = item.data_id + 1;
            }

            createCard(item);
        }
    }

    let searchBtn = document.getElementById("goBtn");
    searchBtn.addEventListener("click", goButton)


}
window.addEventListener("load", setup);


const goButton = () =>{
    let cmdInput = document.getElementById("cmdInput").value;
    let cmdInputTrim = cmdInput.trim();
    let cmdArray = cmdInputTrim.split(" ");
    let commandWord = cmdArray[0].trim();
    cmdArray.splice(0,1);

    for(let i = cmdArray.length-1; i>=0; i--){
        if(cmdArray[i] === ''){
            cmdArray.splice(i, 1);
        }
    }

    let zoekWoord = cmdArray.join("+");

    let prefix = commandWord[0];


    let h = {
        titel: "Google",
        text: "webdesign",
        url: "https://www.google.com/search?q=webdesign",
        data_id: 0
    }

    if(prefix === "/") {
        if (commandWord === '/y' || commandWord === '/g' || commandWord === '/t' || commandWord === '/i') {
            if (commandWord === "/y") {
                h.titel = "Youtube";
                h.url = "https://www.youtube.com/results?search_query=" + zoekWoord;
            }else if(commandWord === "/t"){
                h.titel = "Twitter";
                h.url = "https://x.com/hashtag/" +zoekWoord;
            }else if(commandWord === "/g"){
                h.titel = 'Google';
                h.url = "https://www.google.com/search?q=" + zoekWoord;
            }else if(commandWord === '/i'){
                h.titel = 'Instagram';
                h.url = "https://www.instagram.com/explore/tags/" + zoekWoord + "/";
            }
            window.open(h.url);
            h.text = zoekWoord.split("+").join(" ");
            h.data_id = global.global_id;

            global.global_id++;
            toJSN(h);
            createCard(h);

        } else {
            alert("Ongeldig commando!")
        }
    }else{
        alert("Er is geen prefix!")
    }

    document.getElementById("cmdInput").value = "";


}

const createCard = (h) =>{
    let parentDiv = document.querySelector(".grid-container-history");
    let divElement = document.createElement("div");
    let h3Element = document.createElement("h3");
    let pElement = document.createElement("p");
    let aElement = document.createElement("a");
    let button = document.createElement("button");
    button.textContent = "X"
    button.classList.add("deleteCross")

    divElement.setAttribute("data-id", h.data_id);
    divElement.classList.add(h.titel.toLowerCase());

    aElement.href = h.url;
    aElement.textContent = "GO!";
    h3Element.textContent = h.titel;
    pElement.textContent = h.text;

    parentDiv.appendChild(divElement);
    divElement.appendChild(h3Element);
    divElement.appendChild(pElement);
    divElement.appendChild(aElement);
    divElement.appendChild(button);

    aElement.addEventListener("click", openWindowGo);
    button.addEventListener("click", rmvCard);
}

const toJSN = (parameter) =>{
    let bestaande = localStorage.getItem("startPage");
    let geschiedenis = [];
    if(bestaande){
        geschiedenis = JSON.parse(bestaande);
    }

    geschiedenis.push(parameter);
    localStorage.setItem("startPage", JSON.stringify(geschiedenis));
}


const openWindowGo = (event) =>{
    event.preventDefault();
    window.open(event.target.href);
}

const rmvCard = (event) =>{
    event.target.parentElement.remove();
    updateRmvCard(event.target.parentElement);
}

const updateRmvCard = (parameter) =>{
    let bestaandeData = localStorage.getItem("startPage");
    let data_id = parameter.getAttribute("data-id");
    let toObject = JSON.parse(bestaandeData);
    let gevonden = false;
    let i = 0;
    while(i <toObject.length && gevonden===false){
        if(toObject[i].data_id === parseInt(data_id)){
            gevonden =true;
            toObject.splice(i,1);
        }

        i++;
    }
    console.log(toObject);
    console.log(data_id)
    localStorage.setItem("startPage", JSON.stringify(toObject));

}