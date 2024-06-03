

const ulElement = document.querySelector('ul');
const ulChildren = Array.from(ulElement.children);

let opacity = 1;

ulChildren.forEach(child => {
    child.style.backgroundColor = "#1e293b";
    child.style.opacity = opacity;
    opacity -= 0.2;
});