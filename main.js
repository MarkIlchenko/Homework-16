input.onblur = function () {
    if (!input.value.includes('@')) {
        input.classList.add('invalid');
        error.innerHTML = 'Please enter a correct email.'
    } else {
        input.classList.add('succes');
        document.getElementById("error").innerHTML="Ok!";
        document.getElementById("error").style.color="green";
    }
};

input.onfocus = function () {
    if (this.classList.includes('invalid')) {
        input.classList.remove('invalid');
        error.innerHTML = "";
    }
}