

const heroElement = document.querySelector(".hero");

let divCount = Number(prompt("How many divs? [ Max = 20 ]", "10"));

if (divCount > 20) {
    divCount = 20;
}

const divAlign = prompt("Orientation: Row or Column? [ R / C ]", "C").toUpperCase();

if (divAlign.includes("R")) {
    heroElement.style.gridAutoFlow = "row";
}
else if (divAlign.includes("C")) {
    heroElement.style.gridAutoFlow = "column";
}

lightness = 0;

for (let i = 1; i <= divCount; i++) {

    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = `hsl(225, 46%, ${lightness}%)`;
    lightness += 3;
    heroElement.appendChild(newDiv);
}