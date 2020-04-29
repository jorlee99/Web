window.onscroll = function() {stickFunction()};

var navbar = document.getElementById("topnav");

function linkFunction(){
    if (navbar.className === "navigator"){
        navbar.className += "responsive";
    }
    else {
        navbar.className = "navigator";
    }
}


function stickFunction(){
    if (window.pageYOfffset >= sticky)
        navbar.ClassList.add("sticky");
    else
        navbar.classList.remove("sticky");
    }

function buttonFunction(){

}