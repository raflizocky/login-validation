function ValidateForm() {
    let x = document.forms["login-validation"];
    let email = x.elements["email"].value;
    let password = x.elements["password"].value;
    let errorCard = document.getElementById("errorCard");

    if (email == "youremail@gmail.com" && password == "12345") {
        errorCard.style.display = "none";
        alert("Logged in!");
        return false;
    } else {
        errorCard.textContent = "Wrong Email or Password!";
        errorCard.style.display = "block";
        return false;
    }
}
