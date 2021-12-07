 let username = document.getElementById("username");
 let password = document.getElementById("password");
 let login = document.getElementById("login");
 let btnLogin = document.getElementById("btnLogin");
 let btnLogout = document.getElementById("btnLogout");

 let notLoggedIn = document.getElementById("notLoggedIn");
 let wrongLogin = document.getElementById("wrongLogin");
 let loggedIn = document.getElementById("loggedIn");

 localStorage.setItem("username", "janne");
 localStorage.setItem("password", "test");


 window.addEventListener("load", function() {
     if (localStorage.getItem("status") == "inloggad") {
         loginfunction()
         return
     }
     
     document.getElementById("username").style.display = "block";
     document.getElementById("password").style.display = "block";
     document.getElementById("btnLogin").style.display = "block";
     document.getElementById("btnLogout").style.display = "none";
     document.getElementById("notLoggedIn").style.display = "block";
     document.getElementById("wrongLogin").style.display = "none";
     document.getElementById("loggedIn").style.display = "none";
 })

 btnLogin.addEventListener("click", loginfunction)
 function loginfunction () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (localStorage.getItem("username") == "janne" &&
    localStorage.getItem("password") == "test") {

        document.getElementById("username").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("btnLogin").style.display = "none";
        document.getElementById("btnLogout").style.display = "block";
        document.getElementById("notLoggedIn").style.display = "none";
        document.getElementById("wrongLogin").style.display = "none";
        document.getElementById("loggedIn").style.display = "block";
        
        localStorage.setItem("status", "inloggad")
    }
    else {
        document.getElementById("btnLogout").style.display = "none";
        document.getElementById("notLoggedIn").style.display = "none";
        document.getElementById("wrongLogin").style.display = "block";
        document.getElementById("loggedIn").style.display = "none";
    }
 };

 btnLogout.addEventListener("click", function () {
     document.getElementById("username").style.display = "block";
     document.getElementById("password").style.display = "block";
     document.getElementById("btnLogin").style.display = "block";
     document.getElementById("btnLogout").style.display = "none";
     document.getElementById("notLoggedIn").style.display = "block";
     document.getElementById("wrongLogin").style.display = "none";
     document.getElementById("loggedIn").style.display = "none";
    
    localStorage.clear();
    location.reload();
 })