const uploadBtn =
document.getElementById("uploadBtn");

uploadBtn.addEventListener(
    "click",
    function(){

        const file =
        document.getElementById("resumeFile")
        .files[0];

        if(file){

            document.getElementById("fileName")
            .innerText =
            file.name;

        }

        else{

            alert("Please select a PDF file.");

        }

    }
);