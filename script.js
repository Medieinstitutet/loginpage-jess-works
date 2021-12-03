/* 
 vy ett --> addEventListener("click", ?) ger att rätt username och password
 leder till vy två 
 vy två --> Rutor bort, logga ut knapp (Hej username)
 addEventListener("click", ?) ger att user loggas ut och tas tillbaka till vy ett
 vy tre --> vid fel username eller password, behöver leda till vy två vid rätt credentials
 if/if else
 lägg till localStorage
 */

 //lyft in variabler i js

 const username = document.addElementById("username");
 const password = document.addElementById("password");
 const login = document.addElementById("login");

//login i vy ett som leder till vy två


//felmeddelande


//logout i vy två leder tillbaka till vy ett