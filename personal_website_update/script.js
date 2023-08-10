let watch_button = document.getElementById("watchBtn"); 
let allContent = document.getElementById("allContent");

let dropDown = document.getElementById("dropdown");

let seiko = document.getElementById("content1");
let casio = document.getElementById("content2");
let crash = document.getElementById("content3");
let choose = document.getElementById("choose");

//let containers = document.getElementsByClassName("watch_container");

dropDown.onchange = function(event) {
    event.preventDefault();

    let option = dropDown.value; 
    console.log(option);

    if(option == "seiko") {
        seiko.style.display = "block";
        casio.style.display = "none";
        crash.style.display = "none";
    }


    else if(option == "casio"){
        casio.style.display = "block";
        crash.style.display = "none";
        seiko.style.display = "none";
    }


    else if(option == "crash_cartier"){
        crash.style.display = "block";
        casio.style.display = "none";
        seiko.style.display = "none";

    }
    
    console.log("cool beans");
}




