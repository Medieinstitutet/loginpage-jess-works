 let username = document.getElementById("username");
 let password = document.getElementById("password");
 let login = document.getElementById("login");
 let btnLogin = document.getElementById("btnLogin");
 let btnLogout = document.getElementById("btnLogout");

 let notLoggedIn = document.getElementById("notLoggedIn");
 let wrongLogin = document.getElementById("wrongLogin");
 let loggedIn = document.getElementById("loggedIn");

 //default toggle som döljer vy 2 och 3 i startläge. HUR?

 btnLogin.addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "janne" && password === "test") {
        document.getElementById("username").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("btnLogin").style.display = "none";
        document.getElementById("notLoggedIn").style.display = "none";
        document.getElementById("wrongLogin").style.display = "none";
        document.getElementById("loggedIn").style.display = "block";

        //localStorage save? Stringify
        //localStorage.setItem("username", "janne");
    }
    else {
        document.getElementById("btnLogout").style.display = "none";
        document.getElementById("notLoggedIn").style.display = "none";
        document.getElementById("wrongLogin").style.display = "block";
        document.getElementById("loggedIn").style.display = "none";
    }
 });

 btnLogout.addEventListener("click", function () {
     document.getElementById("username").style.display = "block";
     document.getElementById("password").style.display = "block";
     document.getElementById("btnLogin").style.display = "block";
     document.getElementById("btnLogout").style.display = "none";
     document.getElementById("notLoggedIn").style.display = "block";
     document.getElementById("wrongLogin").style.display = "none";
     document.getElementById("loggedIn").style.dispaly = "none";
     //varför syns "loggedIn"?
    //localStorage erase?
 })