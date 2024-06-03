
const listItems = document.querySelectorAll("li");

const buttons = document.querySelectorAll("button");

function handleButtonClick(event) {
    const styleType = event.target.getAttribute('name');

    listItems.forEach(function (li) {
        switch (styleType) {
            case "margin":
                li.style.margin = "1rem";
                break;
            case "padding":
                li.style.padding = "1rem";
                break;
            case "fontSize":
                li.style.fontSize = "4rem";
                break;
            case "fontFamily":
                li.style.fontFamily = "Montserrat";
                break;
            case "fontWeight":
                li.style.fontWeight = "bold";
                break;
            case "listStyle":
                li.style.listStyle = "decimal";
                break;
            case "backgroundColor":
                li.style.backgroundColor = "#1e293b";
                break;
            case "customCSS":
                applyCustomCSS(li);
                break;
        }
    });
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

//-_-//

const applyCSS = document.getElementById('showCSS');

applyCSS.addEventListener('click', function () {
    document.body.classList.add('showCSS');
});