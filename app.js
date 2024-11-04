var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");
var copyPass = document.getElementById("copypass");


pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
        // pass.style.borderColor = "default";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "week";
        pass.style.borderColor = "Red";
        msg.style.color = "Red";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "Yellow";
        msg.style.color = "Yellow";
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "Green";
        msg.style.color = "Green";
    }
});

function copyText() {
    password.select();
    password.setSelectionRange(0, 99999);


    navigator.clipboard.writeText(password.value);

    alert("Copied the text: " + password.value);
};

function toggle() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
};
