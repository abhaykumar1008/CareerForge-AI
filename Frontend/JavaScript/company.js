const showBtn =
document.getElementById("showBtn");

showBtn.addEventListener(
    "click",
    function(){

        const company =
        document.getElementById("companySelect").value;

        let details = "";

        if(company === "google"){

            details = `
            <h2>Google</h2>

            <h3>Required Skills</h3>
            <ul>
                <li>DSA</li>
                <li>System Design</li>
                <li>JavaScript</li>
            </ul>

            <h3>Interview Rounds</h3>
            <ul>
                <li>Online Assessment</li>
                <li>Technical Interviews</li>
                <li>HR Round</li>
            </ul>
            `;

        }

        else if(company === "amazon"){

            details = `
            <h2>Amazon</h2>

            <h3>Required Skills</h3>
            <ul>
                <li>DSA</li>
                <li>OOP</li>
                <li>SQL</li>
            </ul>

            <h3>Interview Rounds</h3>
            <ul>
                <li>Online Assessment</li>
                <li>Technical Interview</li>
                <li>Leadership Principles Round</li>
            </ul>
            `;

        }

        else if(company === "microsoft"){

            details = `
            <h2>Microsoft</h2>

            <h3>Required Skills</h3>
            <ul>
                <li>DSA</li>
                <li>Operating System</li>
                <li>DBMS</li>
            </ul>

            <h3>Interview Rounds</h3>
            <ul>
                <li>Online Test</li>
                <li>Technical Interviews</li>
                <li>HR Round</li>
            </ul>
            `;

        }

        else if(company === "infosys"){

            details = `
            <h2>Infosys</h2>

            <h3>Required Skills</h3>
            <ul>
                <li>Java</li>
                <li>SQL</li>
                <li>Communication</li>
            </ul>

            <h3>Interview Rounds</h3>
            <ul>
                <li>Aptitude Test</li>
                <li>Technical Interview</li>
                <li>HR Interview</li>
            </ul>
            `;

        }

        else{

            details = `
            <h2>TCS</h2>

            <h3>Required Skills</h3>
            <ul>
                <li>Programming Basics</li>
                <li>DBMS</li>
                <li>Problem Solving</li>
            </ul>

            <h3>Interview Rounds</h3>
            <ul>
                <li>NQT Test</li>
                <li>Technical Interview</li>
                <li>HR Interview</li>
            </ul>
            `;

        }

        document.getElementById("companyDetails").innerHTML =
        details;

    }
);