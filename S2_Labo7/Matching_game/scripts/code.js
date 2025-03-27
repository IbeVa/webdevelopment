let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGES_PREFIX: "images/",
    timeoutId: 0,
    FLIPPED_CARDS: [],
    removed_cards: 0,
    AANTAL_GELIJKE_KAARTEN: 2
}

const setup = () => {
    let aantalGelijkeKaarten = document.getElementById("aantalGelijkeKaarten");
    aantalGelijkeKaarten.addEventListener("input", willekeurigeVolgorde);
    willekeurigeVolgorde();
}
window.addEventListener("load", setup);

const willekeurigeVolgorde = () => {
    const afbeeldingen = ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"]
    let achterKant = "achterkant.png"

    let aantalGelijkeKaarten = document.getElementById("aantalGelijkeKaarten").value;
    global.AANTAL_GELIJKE_KAARTEN = parseInt(aantalGelijkeKaarten);

    let aantalGelijke = global.AANTAL_GELIJKE_KAARTEN;
    const dubbelAfbeeldingen = [];
    for(let i = 0; i < aantalGelijke; i++){
        dubbelAfbeeldingen.push(...afbeeldingen);
    }

    console.log(dubbelAfbeeldingen)


    let divElement = document.getElementById("afbeelding");
    divElement.textContent = "";
    global.removed_cards = 0;
    global.FLIPPED_CARDS = [];
    global.AANTAL_HORIZONTAAL = dubbelAfbeeldingen.length/3;

    for (let i = 0; i < dubbelAfbeeldingen.length; i++) {
        let randomGetal = Math.random() * dubbelAfbeeldingen.length;
        let floorRandomGetal = Math.floor(randomGetal);
        [dubbelAfbeeldingen[i], dubbelAfbeeldingen[floorRandomGetal]] = [dubbelAfbeeldingen[floorRandomGetal], dubbelAfbeeldingen[i]];
    }

    divElement.className = "divElement";
    divElement.style.gridTemplateRows = "repeat(" + global.AANTAL_VERTICAAL + ",1fr)";
    divElement.style.gridTemplateColumns = "repeat(" + global.AANTAL_HORIZONTAAL + ",1fr)";

    for (let i = 0; i < dubbelAfbeeldingen.length; i++) {
        let card = document.createElement("div");
        card.className = "card";

        let imgElement = document.createElement("img");
        imgElement.className = "front";
        imgElement.setAttribute("src", global.IMAGES_PREFIX + dubbelAfbeeldingen[i]);
        imgElement.setAttribute("alt", dubbelAfbeeldingen[i]);
        card.appendChild(imgElement);

        let achterkant = document.createElement("img");
        achterkant.setAttribute("src", global.IMAGES_PREFIX + achterKant);
        achterkant.className = "back";
        card.appendChild(achterkant);

        divElement.appendChild(card);
        achterkant.addEventListener("click", flip_card);

    }


}

const flip_card = (event) => {
    let audio = document.getElementById("mijnAudio");

    if (global.FLIPPED_CARDS.length < global.AANTAL_GELIJKE_KAARTEN) {
        audio.play();
        event.target.parentElement.classList.remove("unflip-card");
        event.target.parentElement.classList.add("flip-card");
        global.FLIPPED_CARDS.push(event.target.parentElement.children[0].getAttribute("src"));
        controleerKaarten();
    }
}


const controleerKaarten = () => {

    if(global.FLIPPED_CARDS.length === global.AANTAL_GELIJKE_KAARTEN) {

        let allemaalGelijk = true;
        let i = 1;
        while (allemaalGelijk && i < global.FLIPPED_CARDS.length) {
            if (global.FLIPPED_CARDS[0] !== global.FLIPPED_CARDS[i]) {
                allemaalGelijk = false;

            }
            i++;
        }


        if (allemaalGelijk === true) {
            global.timeoutId = setTimeout(removeCard, 1000);

        } else {
            if (global.FLIPPED_CARDS.length === global.AANTAL_GELIJKE_KAARTEN) {

                global.timeoutId = setTimeout(unflip, 1500);
            }
        }
    }

}

const unflip = () => {
    let errorAudio = document.getElementById("error");
    let divElement = document.getElementById("afbeelding");
    let cardElementen = divElement.children;
    if (global.FLIPPED_CARDS.length === global.AANTAL_GELIJKE_KAARTEN) {
        for (let i = 0; i < cardElementen.length; i++) {
            if (cardElementen[i].getAttribute("class") === "card flip-card") {
                cardElementen[i].classList.remove("flip-card");
                errorAudio.play();
                cardElementen[i].classList.add("unflip-card");

            }
        }
    }
    global.FLIPPED_CARDS = [];
    clearTimeout(global.timeoutId);
}

const removeCard = () => {
    let correctAudo = document.getElementById("correct");
    correctAudo.play();
    let divElement = document.getElementById("afbeelding");
    let partyhorn = document.getElementById("partyhorn");
    let cardElementen = divElement.children;
    let card1 = global.FLIPPED_CARDS[0];
    for (let i = 0; i < cardElementen.length; i++) {
        if (cardElementen[i].children[0].getAttribute("src") === card1) {
            cardElementen[i].children[0].remove();
            cardElementen[i].classList.remove("flip-card");
            cardElementen[i].children[0].classList.add("noDisplay");
            global.removed_cards++;

        }
    }
    clearTimeout(global.timeoutId);
    global.FLIPPED_CARDS = [];

    if (global.removed_cards === global.AANTAL_KAARTEN*global.AANTAL_GELIJKE_KAARTEN) {
        partyhorn.play();
        window.alert("Gefeliciteerd!");
        location.reload();
    }

}

