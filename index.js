const spaceBtn = document.querySelector("#space")
const display = document.querySelector(".display")
const deleteBtn = document.querySelector("#delete")

function disp(result) {
    form.textarea.value = form.textarea.value + result;
    spaceBtn.onclick = (() => {
        form.textarea.value += " ";
    });
    // delete all button
    deleteBtn.onclick = (() => {
        form.textarea.value = "";
    })
}
function backspace() {
    var temp1 = '';
    var temp2 = '';
    if (equalTo === 1) {
        clearButton();
    }
}
document.getElementById('copy').addEventListener('click', copy);
function copy() {
    document.querySelector('#textarea').select();
    document.execCommand('copy')
}