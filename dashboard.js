let username =
localStorage.getItem("username");

if(!username){

    window.location.href =
    "login.html";

}

document.getElementById("welcomeUser")
.innerText =
"Welcome, " + username;