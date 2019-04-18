//FOR THE TEXT FIELD IDS
var userName=document.getElementById("fnames");
var userName2=document.getElementById("lnames");
var email=document.getElementById("emails");
var address=document.getElementById("address");
var password=document.getElementById("pass");
var phoneNo=document.getElementById("phone");
var birthDate=document.getElementById("birthD");
var female=document.getElementById("auto_renew_female");
var male=document.getElementById("auto_renew_male");

//For educational status
var high=document.getElementById("high");
var voc=document.getElementById("voc");
var bach=document.getElementById("bach");
var masters=document.getElementById("masters");
var phd=document.getElementById("phd");


//FOR THE ERROR MESSAGES
var messageFName=document.getElementById("errorFname");
var messageLName=document.getElementById("errorLname");
var messageEmail=document.getElementById("errorEmail");
var messagePassword=document.getElementById("errorPass");
var messagePhone=document.getElementById("errorPhone");
var messageBDate=document.getElementById("errorBdate");
var messageAddress=document.getElementById("errorAddress");
var messageSex=document.getElementById("errorSex");
var messageStatus=document.getElementById("errorStatus");



//EDUCATIONAL BACKGROUND PART
var highSchBack=document.getElementById('high-bc');
var highSchGPA=document.getElementById('high-gpa');
var highSchAward=document.getElementById('high-award');
var degreeBack=document.getElementById('degree-bc');
var degreeGPA=document.getElementById('degree-gpa');
var degreeAward=document.getElementById('degree-award'); 


var messagehighSchBack=document.getElementById('errorHigh');
var messagehighSchGPA=document.getElementById('errorHighGpa');
var messagehighSchAward=document.getElementById('errorHighAw');
var messagedegreeBack=document.getElementById('errordegree');
var messagedegreeGPA=document.getElementById('errorDegreeGpa');
var messagedegreeAward=document.getElementById('errorDegreeAw');

//EDUCATIONAL GOALS

var degreeCer=document.getElementById('highO'); 
var mastersCer=document.getElementById('vocO'); 
var degreeC=document.getElementById('bachO'); 
var mastersC=document.getElementById('mastersO'); 
var phdC=document.getElementById('phdO'); 

var messageerrorCourse=document.getElementById('errorCourse');


var radios = document.getElementsByName("auto_renew");
var i = 0;


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
    messageFName.innerHTML="*Please fill the user name between 3 to 20 characters";
    valid=false;
}
// // else{
// //     $(this).next('.form-control').focus();
// // }


//USER LAST NAME
else if(userName2.value==""){
    userName2.className="wrong-input";
    messageLName.innerHTML="*Please enter your last name";
    valid=false;
}
else if(userName2.value.length<3 || userName2.value.length>20){
    userName2.className="wrong-input";
    messageLName.innerHTML="*Please fill the last name between 3 to 20 characters";
    valid=false;
}

else if(!isNaN(userName2.value)){
    userName2.className="wrong-input";
    messageLName.innerHTML="*Please enter characters";
    valid=false;
}

else if(userName2.value.length<3 || userName2.value.length>20){
    userName2.className="wrong-input";
    messageLName.innerHTML="*Please fill the user name between 3 to 20 characters";
    valid=false;
}

// // else{
// //     $(this).next('.form-control').focus();
// //   }


//SEX

else if(!(female.checked) && !(male.checked)){
   
  messageSex.innerHTML="*Please choose your sex";
  valid=false;
}

// // else{
// //     $(this).next('.form-control').focus();
// // }




// while (!formValid && i < radios.length) {
//     if (radios[i].checked) {
//         valid = true;
//         i++; 
//     }       
// }

// if (!valid) alert("Must check some option!");






//ADDRESS 
else if(address.value==""){
     address.className="wrong-input";
     messageAddress.innerHTML="*Please enter your Address";
     valid=false;
 }

 /*
else{
     setTimeout(function() {
         window.location = "http://127.0.0.1:5500/Submit.html" 
     });
}

// // else{
// //     $(this).next('.form-control').focus();
// //   }

*/


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

// // else{
// //     $(this).next('.form-control').focus();
// //   }

/*
//CURRENT EDUCATION STATUS
else if(!(high.checked) && !(voc.checked) && !(bach.checked) && !(masters.checked) && !(phd.checked)){
    messageStatus.innerHTML="*Please choose your educational status";
    
}
// // else{
// //  $(this).next('.form-control').focus();
// // }




*/

//HIGHSCHOOL BACKGROUND
else if(highSchBack.value==""){
    highSchBack.className="wrong-input";
    messagehighSchBack.innerHTML="*Please enter the name of university you attended";
    valid=false;
}
else if(highSchBack.value.length<6 || highSchBack.value.length>30){
    highSchBack.className="wrong-input";
    messagehighSchBack.innerHTML="*Please fill the university name between 6 to 30 characters";
    valid=false;
}
// // else{
// //     $(this).next('.form-control').focus();
// // }






//HIGHSCHOOL GPA
else if(highSchGPA.value==""){
    highSchGPA.className="wrong-input";
    messagehighSchGPA.innerHTML="*Please enter your GPA";
    valid=false;
}


else if(isNaN(highSchGPA.value)){
    highSchGPA.className="wrong-input";
    messagehighSchGPA.innerHTML="*GPA can only be numbers";
    valid=false;
}
// // else{
// //     $(this).next('.form-control').focus();
// // }



//HIGHSCHOOL AWARD
else if(highSchAward.value==""){
    highSchAward.className="wrong-input";
    messagehighSchAward.innerHTML="*Please enter any award if you recieve any and say NONE if you dont have any";
    valid=false;
}

// // else{
// //     $(this).next('.form-control').focus();
// // }


//DEGREE BACKGROUND

else if(degreeBack.value==""){
    degreeBack.className="wrong-input";
    messagedegreeBack.innerHTML="*Please enter the name of university you attended";
    valid=false;
}
else if(degreeBack.value.length<6 || degreeBack.value.length>30){
    degreeBack.className="wrong-input";
    messagedegreeBack.innerHTML="*Please fill the university name between 6 to 30 characters";
    valid=false;
}
// // else{
// //     $(this).next('.form-control').focus();
// // }



//DEGREE GPA
else if(degreeGPA.value==""){
    degreeGPA.className="wrong-input";
    messagedegreeGPA.innerHTML="*Please enter your GPA";
    valid=false;
}


else if(isNaN(degreeGPA.value)){
    degreeGPA.className="wrong-input";
    messagedegreeGPA.innerHTML="*GPA can only be numbers";
    valid=false;
}
// // else{
 
// // }


//DEGREE AWARD
else if(degreeAward.value==""){
    degreeAward.className="wrong-input";
    messagedegreeAward.innerHTML="*Please enter any award if you recieve any and say NONE if you dont have any";
    valid=false;
}
else{
    setTimeout(function() {
        window.location = "http://127.0.0.1:5500/Submit.html" 
 });

}

// // else{
    
// //     $(this).next('.form-control').focus();
// // }






/*


else if(!(degreeCer.checked) && !(mastersCer.checked) && !(degreeC.checked) && !(mastersC.checked) && !(phdC.checked)){
    messageerrorCourse.innerHTML="*Please choose the course level you want to attend";
}

// else if(degreeCer.checked || mastersCer.checked || degreeC.checked || mastersC.checked || phdC.checked){
//     $(this).next('.form-control').focus();
// }
// else{
 
//     $(this).next('.form-control').focus();
// }





//CURRENT EDUCATION STATUS
else if(highD.checked || highD2.checked || vocD.checked || vocD2.checked || bachD.checked || mastersD.checked || phdD.checked){
    
    setTimeout(function() {
        window.location = "http://127.0.0.1:5500/Submit.html" 
 });
  
}
else{
    messageerrorDocuments.innerHTML="*Please choose your educational status";
}


// else{
//     setTimeout(function() {
//         window.location = "http://127.0.0.1:5500/Submit.html" 
//     });
// }


*/


return valid;

}

$('.radio').on('change', function(){
    $('.radio').not(this).prop('checked', false);
});

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






// // var radios = document.getElementsByName("auto_renew");
// // var formValid = false;

// // var i = 0;
// // while (!formValid && i < radios.length) {
// //     if (radios[i].checked) formValid = true;
// //     i++;        
// // }

// // if (!formValid) alert("Must check some option!");
// // return formValid;
