var email=document.getElementById("emails");
var password=document.getElementById("pass");

var messageEmail=document.getElementById("errorEmail");
var messagePassword=document.getElementById("errorPass");

var valid=true;








function ValidateForm(){

    removeMessage();

 //USER EMAIL
    if(email.value==""){
        email.className="wrong-input";
        messageEmail.innerHTML="*Please enter your email";
        valid=false;
        
    }

    else if(email.value.indexOf('@') <=0){
        email.className="wrong-input";
        messageEmail.innerHTML="*Please fill your email id in proper format ('@')";
        valid=false;
  
    }

    else if((email.value.charAt(email.value.length-4)!='.')&& (email.value.charAt(
        email.value.length-3)!='.')){
        email.className="wrong-input";
        messageEmail.innerHTML="*Please fill your email id in proper format ('.')";
        valid=false;
  
    }
//   else{
//     $(this).next('.form-control').focus();
//   }
    //USER PASSWORD
    else if(password.value==""){
        password.className="wrong-input";
        messagePassword.innerHTML="*Please enter password";
        valid=false;
      
    }
 
    else if(password.value.length<5 || password.value.length>20){
        password.className="wrong-input";
        messagePassword.innerHTML="*Please fill the password between 5 to 20 characters";
        valid=false;
        
    }
    else{
        setTimeout(function() {window.location = "http://127.0.0.1:5500/LastDestination.html" });
    }
  
 
 return valid;

}














function removeMessage(){
    var errorinput=document.querySelectorAll(".wrong-input");
    [].forEach.call(errorinput, function(el){
            el.classList.remove("wrong-input");
            el.classList.add("form-control");
    });

    var errorpara=document.querySelectorAll(".error");
    [].forEach.call(errorpara, function(el){
        el.innerHTML="";
    });
}

function removeMes(input){

    input.classList.remove("wrong-input");
    input.classList.add("form-control");
    
    input.nextElementSibling.innerHTML="";
}





//IF EVER YOU WAN TO VALIDATE EACH TEXT BOX FIELDS ONE BY ONE RATHER THAN VALIDATING EACH ONE OF THEM AT A TIME....USE THE FOLLOWING EXAMPLE
/*
function ValidateForm(){

    removeMessage();

 //USER EMAIL
    if(email.value==""){
        email.className="wrong-input";
        messageEmail.innerHTML="*Please enter your email";
        valid=false;
        
    }

    else if(email.value.indexOf('@') <=0){
        email.className="wrong-input";
        messageEmail.innerHTML="*Please fill your email id in proper format ('@')";
        valid=false;
  
    }

    else if((email.value.charAt(email.value.length-4)!='.')&& (email.value.charAt(
        email.value.length-3)!='.')){
        email.className="wrong-input";
        messageEmail.innerHTML="*Please fill your email id in proper format ('.')";
        valid=false;
  
    }
 
    //USER PASSWORD
    else if(password.value==""){
        password.className="wrong-input";
        messagePassword.innerHTML="*Please enter password";
        valid=false;
      
    }
 
    else if(password.value.length<5 || password.value.length>20){
        password.className="wrong-input";
        messagePassword.innerHTML="*Please fill the password between 5 to 20 characters";
        valid=false;
        
    }
    else{
        setTimeout(function() {window.location = "http://127.0.0.1:5500/Submit.html" });
    }
  
 
 return valid;

}



*/