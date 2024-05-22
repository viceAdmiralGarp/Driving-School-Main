var counter = 0

function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку " + counter
}

function onInput(el) {
    if (el.value) {
        confirm("Are you sure with this text?")
    }

}
let date = new Date()
console.log(date.getFullYear())