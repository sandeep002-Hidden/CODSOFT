function switchMode() {
    const mode = document.getElementById("switchBtn").innerText
    console.log("Hello")
    if (mode === "Light Mode") {
        document.getElementById("main").style.backgroundColor = "black";
        document.getElementById("main").style.color = "white";
        document.getElementById("switchBtn").innerText = "Dark Mode";
        let btnS = document.getElementsByClassName("btn")
        for (let i = 0; i < btnS.length; i++) {
            btnS[i].style.color = "white"
        }
        document.getElementById("fst").style.backgroundColor = "white"
        document.getElementById("header").style.borderBottom = ".1mm solid rgb(147 51 234)";
        document.getElementById("header").style.borderBottomRightRadius = "10px"
        document.getElementById("header").style.borderBottomLeftRadius = "10px"
        let proDiv=document.getElementsByClassName("sProject")
        for(let i=0;i<proDiv.length;i++){
            proDiv[i].style.backgroundColor="black"
        }

    }
    else {
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("main").style.color = "black";
        document.getElementById("switchBtn").innerText = "Light Mode"
        let btnS = document.getElementsByClassName("btn")
        for (let i = 0; i < btnS.length; i++) {
            btnS[i].style.color = "black"
        }
        let proDiv=document.getElementsByClassName("sProject")
        for(let i=0;i<proDiv.length;i++){
            proDiv[i].style.backgroundColor="white"
        }
    }
}
function seeResume(){
    window.location.href="https://drive.google.com/file/d/138bQKTLoAj2Nt3k33h4EzMRsDH9cYAuR/view?usp=drive_link"
}
function contactMe(){
    window.location.href="mailto:mohapatrasandeep28@gmail.com"
}