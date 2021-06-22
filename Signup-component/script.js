//validate email:
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showError(identifier) {

    let inputClass, errorClass, iconClass;
    if (identifier === 'f') {
        inputClass = ".fName";
        errorClass = ".ferror";
        iconClass = ".f-icon"
    } else if (identifier === 'l') {
        inputClass = ".lName";
        errorClass = ".lerror";
        iconClass = ".l-icon"
    } else if (identifier === 'e') {
        inputClass = ".email";
        errorClass = ".eerror";
        iconClass = ".e-icon"
    } else if (identifier === 'p') {
        inputClass = ".password";
        errorClass = ".perror";
        iconClass = ".p-icon"
    }
    document.querySelector(inputClass).classList.add("error");
    document.querySelector(inputClass).style.color = "red";
    document.querySelector(errorClass).style.display = "block";
    document.querySelector(iconClass).style.display = "block";

}

// Remove error function:
function removeError(identifier) {

    let inputClass, errorClass, iconClass;
    if (identifier === 'f') {
        inputClass = ".fName";
        errorClass = ".ferror";
        iconClass = ".f-icon"
    } else if (identifier === 'l') {
        inputClass = ".lName";
        errorClass = ".lerror";
        iconClass = ".l-icon"
    } else if (identifier === 'e') {
        inputClass = ".email";
        errorClass = ".eerror";
        iconClass = ".e-icon"
    } else if (identifier === 'p') {
        inputClass = ".password";
        errorClass = ".perror";
        iconClass = ".p-icon"
    }

    document.querySelector(inputClass).classList.remove("error");
    document.querySelector(inputClass).style.color = "hsl(249, 10%, 26%)";
    document.querySelector(errorClass).style.display = "none";
    document.querySelector(iconClass).style.display = "none";
}



document.querySelector(".btn-submit").addEventListener("click", function () {
    // Save the respective values in assigned variables
    const firstName = document.querySelector(".fName").value;
    const lastName = document.querySelector(".lName").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    //if any validation fails show error else remove if any error shown.
    if (!validateEmail(email)) {
        showError('e');
    } else {
        removeError('e');
    }

    if (!firstName) {
        showError('f');

    } else {
        removeError('f');
    }

    if (lastName === "") {
        showError('l');
    } else {
        removeError('l');
    }

    if (password === "") {
        showError('p');
    } else {
        removeError('p')
    }
});
