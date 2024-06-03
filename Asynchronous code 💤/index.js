
// takes the function secondary() as a parameter [{(callback)}]
function primary(callback) {

    setTimeout(() => {
        console.log("Commit #1");
        callback(); // delaying the callback function along with the above line
    }, 3000) // delay of 3000 milliseconds (3 seconds)
}

function secondary() {

    console.log("Commit #2");
    console.log("Commit #3");
    console.log("Commit #4");
    console.log("Commit #5");
}

primary(secondary) // using callback and passing another function as a parameter