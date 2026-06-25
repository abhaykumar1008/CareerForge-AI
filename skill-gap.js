const checkBtn =
document.getElementById("checkBtn");

checkBtn.addEventListener(
    "click",
    function(){

        const requiredSkills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git"
        ];

        const userSkills = [
            "HTML",
            "CSS",
            "JavaScript"
        ];

        const missingSkills =
        requiredSkills.filter(
            skill =>
            !userSkills.includes(skill)
        );

        document.getElementById("result")
        .innerHTML =
        "Missing Skills: " +
        missingSkills.join(", ");
    }
);