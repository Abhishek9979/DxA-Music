


function validate1()
{
const myForm=document.getElementById('myForm');
myForm.addEventListener("submit",(e)=>{
e.preventDefault();
});
var user=document.forms["myForm"]["uname"].value;
var pass=document.forms["myForm"]["pass"].value;
for(i=0;i<localStorage.length;i++)
{   
    var key1=localStorage.key(i);
    var value1=localStorage.getItem(key1);
    if(pass==value1 && user==key1)
    {
        window.location.href="afterlogin.html";
        alert("Welcome to DxA music "+  user);
        return
    }
    
}
alert("invalid username or password");
}


function add_user()
{
    const acc=document.getElementById('acc');
acc.addEventListener("submit",(e)=>{
e.preventDefault();
});
var user=document.forms["acc"]["uname"].value;
var pass=document.forms["acc"]["pass"].value;
var conpass=document.forms["acc"]["conpass"].value;
for(var i=0;i<localStorage.length;i++)
{
    var temp=localStorage.key(i);
    if(temp==user)
    {
        alert("username not available");
        return;
    }
}
if(pass != conpass)
{
    alert("password does not match");
    
}
else{
   localStorage.setItem(user,pass);
   alert("Welcome to DxA Music "+ user);
   window.location.href="afterlogin.html";

}
}


