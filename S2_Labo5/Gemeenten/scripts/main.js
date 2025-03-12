const setup = () => {
    let dropdown = document.getElementById("gemeenten")
    let stoppen = false;
    const arr = [];
    while (stoppen === false) {
        let prompt = window.prompt("Geef een gemeente: ");

        if (prompt !== null) {
            prompt = prompt.trim();
            if (prompt.toLowerCase() === "stop") {
                stoppen = true;
            } else if(prompt !== "") {
                arr.push(prompt);
            }
        }
    }
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option');
        option.text = option.value = arr[i];
        dropdown.add(option);

    }
}
window.addEventListener("load", setup);