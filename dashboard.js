let username =
localStorage.getItem("username");

if(!username){

    window.location.href =
    "login.html";

}

document.getElementById("welcomeUser")
.innerText =
"Welcome, " + username;

document.getElementById("placementScore")
.innerText = "75%";

document.getElementById("atsScore")
.innerText = "85/100";

document.getElementById("resumeStatus")
.innerText = "Uploaded";

document.getElementById("missingSkills")
.innerText = "2";

const activities = [

    "Resume Uploaded Successfully",

    "ATS Resume Score Generated",

    "Skill Gap Analysis Completed",

    "Learning Roadmap Generated"

];
const companyBtn =
document.getElementById("companyBtn");

companyBtn.addEventListener(
    "click",
    function(){

        const company =
        document.getElementById("companySelect").value;

        let result = "";

        if(company === "google"){

            result = `
            <h3>Google</h3>

            <p><strong>Required Skills:</strong></p>

            <ul>

                <li>DSA</li>

                <li>System Design</li>

                <li>JavaScript</li>

            </ul>

            <p><strong>Interview Rounds:</strong></p>

            <ul>

                <li>Online Assessment</li>

                <li>Technical Interview</li>

                <li>HR Round</li>

            </ul>
            `;

        }

        else if(company === "amazon"){

            result = `
            <h3>Amazon</h3>

            <p><strong>Required Skills:</strong></p>

            <ul>

                <li>DSA</li>

                <li>OOP</li>

                <li>SQL</li>

            </ul>

            <p><strong>Interview Rounds:</strong></p>

            <ul>

                <li>Online Assessment</li>

                <li>Technical Interview</li>

                <li>Leadership Principles</li>

            </ul>
            `;

        }

        else{

            result = `
            <h3>More companies will be added soon.</h3>
            `;

        }

        document.getElementById("companyResult").innerHTML =
        result;

    }
);

document.getElementById("skillsBar")
.style.width = "80%";

document.getElementById("resumeBar")
.style.width = "90%";

document.getElementById("projectsBar")
.style.width = "70%";

document.getElementById("dsaBar")
.style.width = "60%";

const ctx =
document.getElementById("placementChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [

            "Skills",

            "Resume",

            "Projects",

            "DSA"

        ],

        datasets: [{

            label: "Score",

            data: [

                80,

                90,

                70,

                60

            ],

            backgroundColor: [

                "#4F46E5",

                "#22C55E",

                "#F59E0B",

                "#EF4444"

            ]

        }]

    },

    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: true,

                max: 100

            }

        }

    }

});
const editBtn = document.getElementById("editProfileBtn");

editBtn.addEventListener("click", function(){

    const newName = prompt("Enter your name:");

    if(newName){

        document.getElementById("profileName").textContent = newName;

        localStorage.setItem("profileName", newName);

    }

});

const savedName = localStorage.getItem("profileName");

if(savedName){

    document.getElementById("profileName").textContent = savedName;

}
const themeColor = document.getElementById("themeColor");
const saveThemeBtn = document.getElementById("saveThemeBtn");

const savedColor = localStorage.getItem("themeColor");

if(savedColor){

    document.documentElement.style.setProperty("--primary-color", savedColor);

    themeColor.value = savedColor;

}

saveThemeBtn.addEventListener("click", function(){

    const color = themeColor.value;

    document.documentElement.style.setProperty("--primary-color", color);

    localStorage.setItem("themeColor", color);

    alert("Theme Saved Successfully!");

});

const darkModeToggle = document.getElementById("darkModeToggle");

const darkMode = localStorage.getItem("darkMode");

if(darkMode === "enabled"){

    document.body.classList.add("dark");

    darkModeToggle.checked = true;

}

darkModeToggle.addEventListener("change", function(){

    if(this.checked){

        document.body.classList.add("dark");

        localStorage.setItem("darkMode","enabled");

    }else{

        document.body.classList.remove("dark");

        localStorage.setItem("darkMode","disabled");

    }

});