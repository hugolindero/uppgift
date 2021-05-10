

 var x,y,z; 
window.onload = function (){
     x=document.getElementById('login-form');
    y=document.getElementById('register');
    z=document.getElementById('btn');
}




function register()
{
    console.log("register"); 
    x.style.display = "block"; 
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
    
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
   