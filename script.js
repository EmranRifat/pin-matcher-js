function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got the animee', pin);
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


// -----------------------------

document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calInput = document.getElementById('display-number');

    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }

    }
    else {
        const previousNumber = calInput.value;
        const newNumber = previousNumber + number;
        calInput.value = newNumber;

    }

});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('display-number').value;
    console.log(pin, typeNumber);
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (pin == typeNumber) {
        successMassage.style.display = 'block';
        failError.style.display = 'none';

    }

    else {
        successMassage.style.display = 'none';

        failError.style.display = 'block';


    }
}