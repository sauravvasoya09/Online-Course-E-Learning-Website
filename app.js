function validate() {
    let email = document.getElementById("email").value;
    let e = /[a-z]{12}[0-9]{2}[@gmail.com]{1}/;
    if (e.test(email)) {
        alert("done");
        return true;
    }
    else {
        alert("not done");
        return false;
    }
}