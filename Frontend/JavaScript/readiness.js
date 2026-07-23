const calculateBtn =
document.getElementById("calculateBtn");

calculateBtn.addEventListener(
    "click",
    function(){

        let skills =
Number(document.getElementById("skills").value);

        let resume =
Number(document.getElementById("resume").value);

        let projects =
Number(document.getElementById("projects").value);

        let dsa =
Number(document.getElementById("dsa").value);

        let average =
(skills + resume + projects + dsa)/4;

        document.getElementById("result")
.innerText =
"Placement Readiness : "
+ average.toFixed(0)
+ "%";

    }
);