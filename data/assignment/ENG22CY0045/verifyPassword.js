function verifyPasswords() {
    var username = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[type="checkbox"]:checked');
    var dob = document.querySelector('input[type="date"]').value;
    var danceStyle = document.querySelector('select').value;
    var address = document.querySelector('textarea').value;
    var errorSpan = document.getElementById("passwordError");
    var successMessage = "Registration Successful!";
    var errorMessage = "Passwords do not match. Check password and try again.";

    if (!username || !email || !password || !confirmPassword || !gender || !dob || danceStyle === "Select Dance Style" || !address) {
        alert("All fields are required.");
        return false;
    }

    if (password !== confirmPassword) {
        errorSpan.innerText = errorMessage;
        alert(errorMessage);
        return false;
    } else {
        errorSpan.innerText = successMessage;
        alert(successMessage);
        window.location.href = "login.html"; // Redirect to login page
        return false;
    }
}
