function submitButton() {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (userName === "")
        alert('Please enter your username');
    else if (password === "")
        alert('Please enter your password');
    else {
        alert('Submitted!');
        window.location.reload();
    }
}

function resetButton() {
    window.location.reload();
}