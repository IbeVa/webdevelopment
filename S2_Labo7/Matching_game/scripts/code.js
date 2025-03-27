let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGES_PREFIX: "images/",
    timeoutId: 0,
    FLIPPED_CARDS: [],
    removed_cards: 0,
}

const setup = () => {
    willekeurigeVolgorde();
}
window.addEventListener("load", setup);

const willekeurigeVolgorde = () => {
    const afbeeldingen = ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"]
    let achterKant = "achterkant.png"
    const dubbelAfbeeldingen = [...afbeeldingen, ...afbeeldingen];

    let divElement = document.getElementById("afbeelding");

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

    if (global.FLIPPED_CARDS.length < 2) {
        audio.play();
        event.target.parentElement.classList.remove("unflip-card");
        event.target.parentElement.classList.add("flip-card");
        global.FLIPPED_CARDS.push(event.target.parentElement.children[0].getAttribute("src"));
        controleerTweeKaarten();
    }
}


const controleerTweeKaarten = () => {
    let card1 = global.FLIPPED_CARDS[0];
    let card2 = global.FLIPPED_CARDS[1];

    if (card1 === card2) {
        global.timeoutId = setTimeout(removeCard, 1000);

    } else {
        if (global.FLIPPED_CARDS.length === 2) {

            global.timeoutId = setTimeout(unflip, 2000);
        }
    }
}

const unflip = () => {
    let errorAudio = document.getElementById("error");
    let divElement = document.getElementById("afbeelding");
    let cardElementen = divElement.children;
    if (global.FLIPPED_CARDS.length === 2) {
        for (let i = 0; i < cardElementen.length; i++) {
            if (cardElementen[i].children[0].getAttribute("src") === global.FLIPPED_CARDS[0] ||
                cardElementen[i].children[0].getAttribute("src") === global.FLIPPED_CARDS[1]) {
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
    let cardElementen = divElement.children;
    let card1 = global.FLIPPED_CARDS[0];
    for (let i = 0; i < cardElementen.length; i++) {
        if (cardElementen[i].children[0].getAttribute("src") === card1) {
            cardElementen[i].children[0].remove();
            global.removed_cards++;

        }
    }
    clearTimeout(global.timeoutId);
    global.FLIPPED_CARDS = [];

    if (global.removed_cards === 12) {
        window.alert("Gefeliceerd!");
        location.reload();
    }

}

