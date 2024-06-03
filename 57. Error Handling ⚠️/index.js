

function divison() {

    try {
        const dividend = Number(window.prompt("Enter divident: "));
        const divisor = Number(window.prompt("Enter divisor: "));

        if (divisor == 0) {
            throw new Error("You can't divide by zero.");
        }

        if (isNaN(dividend) || isNaN(divisor)) {
            throw new Error("Values must be a number.");
        }

        const result = dividend / divisor;
        alert(`The result of the division is ${result}.`);
    }

    catch (error) {
        console.error(error);
    }

    finally {
        const ask = prompt("Try Again? [Y/N]").toUpperCase();

        if (ask.includes("Y")) {
            divison();
        }
        else {
        }

    }
}

divison();