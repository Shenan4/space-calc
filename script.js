const inpResult = document.querySelector('.result')

let counter = '';
function press(num) {
    counter += num
    inpResult.value = counter
}

function equal() {
    inpResult.value = eval(counter)
}

function forKeyboard() {
    inpResult.value = eval(inpResult.value)
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        forKeyboard();
    }
})

function reset() {
    inpResult.value = ''
    counter = ''
}