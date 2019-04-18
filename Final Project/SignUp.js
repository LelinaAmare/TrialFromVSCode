//FOR THE TEXT FIELD IDS
    var userName=document.getElementById("fnames");
    var userName2=document.getElementById("lnames");
    var email=document.getElementById("emails");
    var confirmEmail=document.getElementById("con-emails");
    var password=document.getElementById("pass");
    var confirmPassword=document.getElementById("con-pass");
    var phoneNo=document.getElementById("phone");
    var birthDate=document.getElementById("birthD");


    
//FOR THE ERROR MESSAGES
    var messageFName=document.getElementById("errorFname");
    var messageLName=document.getElementById("errorLname");
    var messageEmail=document.getElementById("errorEmail");
    var messageCEmail=document.getElementById("errorCemail");
    var messagePassword=document.getElementById("errorPass");
    var messageCPassword=document.getElementById("errorCpass");
    var messagePhone=document.getElementById("errorPhone");
    var messageBDate=document.getElementById("errorBdate");


    var valid=true;

function ValidateForm(){

    removeMessage();

   
                


    //USER FIRST NAME
    if(userName.value==""){
        userName.className="wrong-input";
        messageFName.innerHTML="*Please enter your first name";
        valid=false;
    }
    else if(userName.value.length<3 || userName.value.length>20){
        userName.className="wrong-input";
        messageFName.innerHTML="*Pleasr fill the user name between 3 to 20 characters";
        valid=false;
    }

    //USER LAST NAME
    else if(userName2.value==""){
        userName2.className="wrong-input";
        messageLName.innerHTML="*Please enter your last name";
        valid=false;
    }
    // // else{
    // //     $(this).next('.form-control').focus();
    // // }

    //   else if((userName2.value)){
    //     userName2.className="wrong-input";
    //     messageLName.innerHTML="*Please enter characters";
    //     valid=false;
    // }
    
    else if(!isNaN(userName2.value)){
        userName2.className="wrong-input";
        messageLName.innerHTML="*Please enter characters";
        valid=false;
    }

//    else if(userName2.value!=="/[^a-z]/gi;"){
//         userName2.className="wrong-input";
//         messageLName.innerHTML="*Please enter characters";
//         valid=false;
//     }

    else if(userName2.value.length<3 || userName2.value.length>20){
        userName2.className="wrong-input";
        messageLName.innerHTML="*Please fill the user name between 3 to 20 characters";
        valid=false;
    }
 
    // // else{
    // //     $(this).next('.form-control').focus();
    // //   }

    //USER EMAIL
   else if(email.value==""){
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
    // // else{
    // //     $(this).next('.form-control').focus();
    // //   }
    
    //USER CONFIRM EMAIL
    else if(confirmEmail.value==""){
        confirmEmail.className="wrong-input";
        messageCEmail.innerHTML="*Please confirm your email";
        valid=false;
    }
    
    else if(email.value!=confirmEmail.value){
        confirmEmail.className="wrong-input";
        confirmEmail.nextElementSibling.innerHTML="Email does not match";
            valid=false;
    }
    // // else{
    // //     $(this).next('.form-control').focus();
    // //   }
  
 
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
    // // else{
    // //     $(this).next('.form-control').focus();
    // //   }

    //USER CONFIRM PASSWORD
    else if(confirmPassword.value==""){
        confirmPassword.className="wrong-input";
        messageCPassword.innerHTML="*Please confirm your password";
        valid=false;
    }

     else if(password.value!=confirmPassword.value){
        confirmPassword.className="wrong-input";
        confirmPassword.nextElementSibling.innerHTML="Password does not match";
            valid=false;
    }
    // // else{
    // //     $(this).next('.form-control').focus();
    // //   }
 
    //USER PHONE NUMBER
   else if(phoneNo.value==""){
        phoneNo.className="wrong-input";
        messagePhone.innerHTML="*Please enter your phone number";
        valid=false;
    }

    else if(isNaN(phoneNo.value)){
        phoneNo.className="wrong-input";
        messagePhone.innerHTML="*Phone number can only be digit";
        valid=false;
    }
    else if(phoneNo.value.length!=10){
        phoneNo.className="wrong-input";
        messagePhone.innerHTML="*Phone number can not be less or more than 10 digit";
        valid=false;
    }
    // // else{
    // //     $(this).next('.form-control').focus();
    // //   }
 
    //USER BIRTH DATE
    else if(birthDate.value==""){
        birthDate.className="wrong-input";
        messageBDate.innerHTML="*Please enter your birth date";
        valid=false;
    }
    else{
        setTimeout(function() {window.location = "http://127.0.0.1:5500/Submit.html" });
    }


    // else if(userName.match(correct_name))
    // {
    //     true;
    //     else{
    //         messageName.innerHTML="*Only alphabets are allowed";
    //         valid=false;
    //     }   
    // }






                // if(userName.value.length==0){
                //     userName.className="wrong-input";
                //     userName.nextElementSibling.innerHTML="First name can not be blank";
                //     valid=false;
                // }
                // else if(userName.value==/[^0-9]/g){
                //     document.getElementById("error1").innerHTML="First name cannot have number";
                //     valid=false;
                // }


                // if(userName2.value.length==0){
                //     userName2.className="wrong-input";
                //     userName2.nextElementSibling.innerHTML="Last name can not be blank";
                //     valid=false;
                // }

                // // else if(typeof(userName.value)!=="string"){
                // //     userName.className="wrong-input";
                // //     userName.nextElementSibling.innerHTML="Username can only be number";
                // //     valid=false;
                // // }




                // if(email.value.length<6){
                //     email.className="wrong-input";
                //     email.nextElementSibling.innerHTML="Email can not be less than 6 characters";
                //     valid=false;
                // }
                // if(email.value!=confirmEmail.value){
                //     confirmEmail.className="wrong-input";
                //     confirmEmail.nextElementSibling.innerHTML="Email does not match";
                //         valid=false;
                // }
                
                // if(password.value.length<6){
                //     password.className="wrong-input";
                //     password.nextElementSibling.innerHTML="Password can not be less than 6";
                //     valid=false;
                // }
                // if(password.value!=confirmPassword.value){
                //     confirmPassword.className="wrong-input";
                //     confirmPassword.nextElementSibling.innerHTML="Password does not match";
                //         valid=false;
                // }
                
                // if(phoneNo.value.length<10){
                //     phoneNo.className="wrong-input";
                //     phoneNo.nextElementSibling.innerHTML="Contact number can not be less than 10";
                //         valid=false;
                // }
                // if(birthDate.value<=0){
                //     birthDate.className="wrong-input";
                //     birthDate.nextElementSibling.innerHTML="Date can not be empty";
                //         valid=false;
                // }
              
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


function lettersOnly(input){
    var regex=/[^a-z]/gi;//to make accept strings only
    input.value=input.value.replace(regex,"");   
}



function removeMes(input){

        input.classList.remove("wrong-input");
        input.classList.add("form-control");
        
        input.nextElementSibling.innerHTML="";
}




