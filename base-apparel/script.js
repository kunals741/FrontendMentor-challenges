function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function showError() {
    document.querySelector(".errorMessage").style.display = "block";
    document.querySelector(".errorLogo").style.display = "inline-block";
    document.querySelector("input").classList.add("error")

}
function removeError() {
    document.querySelector(".errorMessage").style.display = "none";
    document.querySelector(".errorLogo").style.display = "none";
    document.querySelector("input").classList.remove("error")
}

document.querySelector(".submit").addEventListener("click", function () {
    const email = document.querySelector("input").value;
    if (!validateEmail(email)) {
        showError();
    } else {
        removeError();
    }
});
