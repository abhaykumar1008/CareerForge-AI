let username =
localStorage.getItem("username");

if(!username){
    window.location.href =
    "login.html";
}
const logoutBtn =
document.getElementById("logoutBtn");

logoutBtn.addEventListener(
    "click",
    function(){

        localStorage.removeItem(
            "username"
        );

        window.location.href =
        "login.html";

    }
);