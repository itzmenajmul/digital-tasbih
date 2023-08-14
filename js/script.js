// CARD 1 START HERE
let cardOneValue = 0;
document.getElementById("cardOneIncrement").addEventListener('click', function () {
    if (cardOneValue === 33) {
        return alert("Subhan Allah Complete. Please Fillup anoter one");
    } else {
        const cardOneDisplay = document.getElementById("cardOneDisplay");
        cardOneValue += 1;
        cardOneDisplay.innerText = cardOneValue;
    }
})

document.getElementById("cardOneDicrement").addEventListener('click', function () {
    if (cardOneValue === 0) {
        return alert("You can't added negative value")
    } else {
        const cardOneDisplay = document.getElementById("cardOneDisplay");
        cardOneValue -= 1;
        cardOneDisplay.innerText = cardOneValue;
    }
})

// CARD 1 END HERE

// CARD 2 START HERE

let cardTwoValue = 0;
document.getElementById("cardTwoIncrement").addEventListener('click', function () {
    if (cardTwoValue === 33) {
        return alert("Alhamdulilah Complete. Please Fillup anoter one");
    } else {
        const cardTwoDisplay = document.getElementById("cardTwoDisplay");
        cardTwoValue += 1;
        cardTwoDisplay.innerText = cardTwoValue;
    }
})

document.getElementById("cardTwoDecrement").addEventListener('click', function () {
    if (cardTwoValue === 0) {
        return alert("You can't added negative value")
    } else {
        const cardTwoDisplay = document.getElementById("cardTwoDisplay");
        cardTwoValue -= 1;
        cardTwoDisplay.innerText = cardTwoValue;
    }
})

// CARD 2 END HERE

// CARD 3 START HERE

let cardThreeValue = 0;
document.getElementById("cardThreeIncrement").addEventListener('click', function () {
    if (cardThreeValue === 33) {
        return alert("Allahuakber Complete. Please Reset and continue");
    } else {
        const cardThreeDisplay = document.getElementById("cardThreeDisplay");
        cardThreeValue += 1;
        cardThreeDisplay.innerText = cardThreeValue;
    }
})

document.getElementById("cardThreeDecrement").addEventListener('click', function () {
    if (cardThreeValue === 0) {
        return alert("You can't added negative value")
    } 
    else {
        const cardThreeDisplay = document.getElementById("cardThreeDisplay");
        cardThreeValue -= 1;
        cardThreeDisplay.innerText = cardThreeValue;
    }
})

// CARD 3 END HERE

// RESET BUTTON
document.getElementById("resetAllCardValue").addEventListener('click', function(){
    cardOneDisplay.innerText = 0;
    cardTwoDisplay.innerText = 0;
    cardThreeDisplay.innerText = 0;

    cardOneValue = 0;
    cardTwoValue = 0;
    cardThreeValue = 0;
})


