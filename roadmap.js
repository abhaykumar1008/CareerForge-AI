const generateBtn =
document.getElementById("generateBtn");

generateBtn.addEventListener(
    "click",
    function(){

        const role =
        document.getElementById("roleSelect").value;

        let roadmap = [];

        if(role === "frontend"){

            roadmap = [

                "📅 Week 1 : Learn Git & GitHub",

                "📅 Week 2 : Learn React Fundamentals",

                "📅 Week 3 : Build React Mini Project"

            ];

        }

        else if(role === "backend"){

            roadmap = [

                "📅 Week 1 : Learn Node.js",

                "📅 Week 2 : Learn Express.js",

                "📅 Week 3 : Learn MySQL",

                "📅 Week 4 : Build REST API"

            ];

        }

        else if(role === "fullstack"){

            roadmap = [

                "📅 Week 1 : Learn React",

                "📅 Week 2 : Learn Node.js",

                "📅 Week 3 : Learn Express.js",

                "📅 Week 4 : Learn MySQL",

                "📅 Week 5 : Build Full Stack Project"

            ];

        }

        document.getElementById("roadmap")
        .innerHTML = roadmap.join("<br><br>");

    }
);