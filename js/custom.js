
var input = document.getElementById("PasswordInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
   event.preventDefault();
   document.getElementById("btnClick").click();
  }
});




function validation(){

    
    var password = document.getElementById("PasswordInput").value;
    const errormsg = document.getElementById("text-error");       
        if(password=="345"){

            return window.location.href="about.html";
        }else{
            errormsg.innerHTML = "Incorrect Password!";    
            return false;
            
        }
    }
    
    