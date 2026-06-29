const analyzeBtn =
document.getElementById("analyzeBtn");

analyzeBtn.addEventListener(
    "click",
    function(){

        document.getElementById("result")
        .innerHTML =

        `
        <h2>ATS Score : 85 / 100</h2>

        <h3>Strengths</h3>

        <ul>
            <li>✔ Good Technical Skills</li>
            <li>✔ Projects Added</li>
            <li>✔ Clean Resume Format</li>
        </ul>

        <h3>Needs Improvement</h3>

        <ul>
            <li>✖ Add GitHub Link</li>
            <li>✖ Add More Projects</li>
            <li>✖ Improve Resume Summary</li>
        </ul>

        `;
    }
);