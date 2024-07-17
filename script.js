firstPassword = document.querySelector("#pwd");
secondPassword = document.querySelector("#pwdconfirm");
message = firstPassword.nextElementSibling;

secondPassword.addEventListener("change", () => {
    if (firstPassword.value.length && firstPassword.value != secondPassword.value) {
        message.setAttribute("class", "error");
        firstPassword.setAttribute("class", "error-style");
        secondPassword.setAttribute("class", "error-style");
    }

    else {
        message.setAttribute("class", "no-error");
        firstPassword.removeAttribute("class");
        secondPassword.removeAttribute("class");
    }
});