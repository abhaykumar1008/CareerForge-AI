const loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener(
    "click",
    function(){

        let username =
        document.getElementById("username").value;

        localStorage.setItem(
            "username",
            username
        );

        window.location.href =
        "dashboard.html";

    }
);