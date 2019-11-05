
var inputName = document.getElementById("input-name");
var inputMail = document.getElementById("input-mail");
var inputPassword = document.getElementById("input-password");
var inputConfirmpassword = document.getElementById("input-confirmpassword");
var button = document.querySelector(".btn");
var regEx = /\S+@\S+\.\S+/;

function checkInput() {
    if (inputName.value.trim()!== "" && regEx.test(inputMail.value)) {
        button.style.backgroundColor= "#ffffff";
    }
    else{
        button.style.backgroundColor= "#1641FF"
    }
}


// var $ipp = document.querySelector("#ipp").value;
// var $email = document.querySelector("#email").value;
// var $cpp = document.querySelector("#cpp").value;
// var regEx = /\S@\S+\.\S+/;

//     if($ipn==""||$ipp==""){
//         alert("fill all empty field");
//     //return false;
//     }else if(ipp!=$cpp){
//         alert("password does not match");

//     }else if($email=="" && regEx.test(email.value)){
//         alert("email field is not filled");

//     }
    
//     else{
//     alert(" login successful");
//     //return true;
//     }

// }