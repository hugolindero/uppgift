

 var x,y,z;  //Skapar variabler för Register 
 var xr,yr,zr; //Skapar för Log in
window.onload = function (){
     x=document.getElementById('login-form');
    y=document.getElementById('register');
    z=document.getElementById('btn');
    xr=document.getElementById('login');
  
}




function register()
{
//sätter ut förbestämda kordinater register, så det ska röra sig vid tryck
    console.log("register"); 
    x.style.display = "block"; 
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
    xr.style.left='-400px';
    yr.style.left='50px';
    zr.style.left='110px';
    
    
}
function login()
{
    //sätter ut förbestämda kordinater för log in, så det ska röra sig vid tryck
    xr.style.left='50px';
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
  
}
var modal = document.getElementById('login-form'); //Skapar ett event då den krånglade och inte ville visas korrket, detta öppnar vid klick vårat föster form
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
   