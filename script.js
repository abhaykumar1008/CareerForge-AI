let username = "Abhay";
let readinessScore = 78;

console.log(username);
console.log(readinessScore);
let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(skills);
function welcomeUser() {
    console.log("Welcome to CareerForge AI");
}

welcomeUser();
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {
    alert("Welcome to CareerForge AI");
});
let readinessScore = 85;

document.getElementById("score").innerText =
readinessScore + "%";
let targetRole = "Full Stack Developer";

document.getElementById("role").innerText =
targetRole;
let username = "Abhay";

document.getElementById("welcome").innerText =
"Welcome, " + username;
let resumeScore = 92;

document.getElementById("resumeScore").innerText =
resumeScore + "/100";
localStorage.setItem(
    "username",
    "Abhay"
);
let username =
localStorage.getItem("username");

document.getElementById("welcome")
.innerText =
"Welcome, " + username;
localStorage.setItem(
    "role",
    "Frontend Developer"
);
let role =
localStorage.getItem("role");

document.getElementById("role")
.innerText = role;
localStorage.setItem(
    "score",
    "85"
);
let score =
localStorage.getItem("score");

document.getElementById("score")
.innerText = score + "%";