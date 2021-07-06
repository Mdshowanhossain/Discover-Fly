
function handleFirstClassTicketCount(isIncreased) {
    let firstClassTicketInputIncrease = document.getElementById("firstClassTicket");
    let firstClassTicketNumber = parseInt(firstClassTicketInputIncrease.value);
    // let newFirstClassTicket = firstClassTicketNumber + 1;
    let newFirstClassTicket = firstClassTicketNumber;
    if (isIncreased === true) {
        newFirstClassTicket = firstClassTicketNumber + 1;
    }
    else if (isIncreased === false && newFirstClassTicket > 0) {
        newFirstClassTicket = firstClassTicketNumber - 1;
    }
    firstClassTicketInputIncrease.value = newFirstClassTicket;
    let firstClassTicketPrice = newFirstClassTicket * 150;
    document.getElementById("firstClassTicketPrice").innerText = 'First Class $' + firstClassTicketPrice;
    calculateTotal()
}
function handleEconomyTicketPrice(isIncreased) {
    let economyTicketInput = document.getElementById("economyTicketInput");
    let economyTicketInputNumber = parseInt(economyTicketInput.value);
    // let newEconomyTicketNumber = economyTicketInputNumber + 1;
    let newEconomyTicketNumber = economyTicketInputNumber;
    if (isIncreased === true) {
        newEconomyTicketNumber = economyTicketInputNumber + 1;
    } else if (isIncreased === false && newEconomyTicketNumber > 0) {
        newEconomyTicketNumber = economyTicketInputNumber - 1;
    }
    economyTicketInput.value = newEconomyTicketNumber;
    let economyTicketPrice = newEconomyTicketNumber * 100;
    document.getElementById("economyTicketPrice").innerText = 'Economy $' + economyTicketPrice;
    calculateTotal()
}

function calculateTotal() {
    const firstClassTicketInput = document.getElementById("firstClassTicket");
    const firstClassTicketInputNumber = parseInt(firstClassTicketInput.value);
    const economyTicketInput = document.getElementById("economyTicketInput");
    const economyTicketInputNumber = parseInt(economyTicketInput.value)
    const subtotal = firstClassTicketInputNumber * 150 + economyTicketInputNumber * 100;
    document.getElementById("subtotal").innerText = subtotal;
    const vat = subtotal * 0.1;
    document.getElementById("vat").innerText = vat;
    const total = subtotal + vat;
    document.getElementById("total").innerText = total;
}




// document.getElementById("economyTicketPlusBtn").addEventListener("click", function () {
//     let economyTicketInput = document.getElementById("economyTicketInput");
//     let economyTicketInputNumber = parseInt(economyTicketInput.value);
//     let newEconomyTicketNumber = economyTicketInputNumber + 1;
//     economyTicketInput.value = newEconomyTicketNumber;

//     let economyTicketPrice = newEconomyTicketNumber * 100;
//     document.getElementById("economyTicketPrice").innerText = 'Economy $' + economyTicketPrice;
// })

// document.getElementById("economyTicketMinusBtn").addEventListener("click", function () {
//     let economyTicketInput = document.getElementById("economyTicketInput");
//     let economyTicketInputNumber = parseInt(economyTicketInput.value);
//     let newEconomyTicketInputNumber = economyTicketInputNumber - 1;
//     economyTicketInput.value = newEconomyTicketInputNumber;

//     let economyTicketPrice = newEconomyTicketInputNumber * 100;
//     document.getElementById("economyTicketPrice").innerText = 'Economy $' + economyTicketPrice;

// })


// document.getElementById("plusBtn").addEventListener("click", function () {
//     let firstClassTicketInputIncrease = document.getElementById("firstClassTicket");
//     let firstClassTicketNumber = parseInt(firstClassTicketInputIncrease.value);
//     let newFirstClassTicket = firstClassTicketNumber + 1;
//     firstClassTicketInputIncrease.value = newFirstClassTicket;
//     let firstClassTicketPrice = newFirstClassTicket * 150;
//     document.getElementById("firstClassTicketPrice").innerText = 'First Class $' + firstClassTicketPrice;

// })

// document.getElementById("mainusBtn").addEventListener("click", function () {
//     let firstClassTicketInputIncrease = document.getElementById("firstClassTicket");
//     let firstClassTicketNumber = parseInt(firstClassTicketInputIncrease.value);
//     let newFirstClassTicketNumber = firstClassTicketNumber - 1;
//     firstClassTicketInputIncrease.value = newFirstClassTicketNumber;

//     let firstClassTicketPrice = newFirstClassTicketNumber * 150;
//     document.getElementById("firstClassTicketPrice").innerText = 'First Class $' + firstClassTicketPrice;

// })

