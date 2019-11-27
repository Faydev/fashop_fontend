function myfun() {
  var inputName = document.getElementById("input-name").value;
  var inputMail = document.getElementById("input-mail").value;
  var inputPassword = document.getElementById("input-password").value;
  var inputConfirmpassword = document.getElementById("input-confirmpassword")
    .value;
  var button = document.querySelector(".btn");

  if (inputPassword == "") {
    document.getElementById("pass").innerHTML = "oops! please your password...";
    return false;
  }

  if (inputPassword.length < 4) {
    document.getElementById("pass").innerHTML =
      "password must be greater than 4 characters...";
    return false;
  }

  if (inputPassword.length > 10) {
    document.getElementById("pass").innerHTML =
      "password must not be greater than 10 characters...";
    return false;
  }

  if (inputPassword !== inputConfirmpassword) {
    document.getElementById("passw").innerHTML =
      "oops! password does not match...";
    return false;
  }

  if (inputName == "") {
    document.getElementById("messages").innerHTML =
      "oops! your name please...?";
    return false;
  }

  if (inputMail == "") {
    document.getElementById("msg").innerHTML = "oops! you too have an email...";
    return false;
  }
}

// function popover (){
//   $("#popover").show();
// }

// function hideSearch (){
//   $("#popover").hide();
// }

// $(".search-icon").click(function() {
//   showSearch();
// })

// $(document).keyup(function(e) {
//   if (e.key === "Escape") {
//     hideSearch();
//   }
// })



  $("[data-toggle='popover']").popover();
  


// function showSearch() {
//   $(".popover").show();
// }

// function hideSearch() {
//   $(".popover").hide();
// }

// $(".search-icon").click(function() {
//   showSearch();
// });

// $(".closer-icon").click(function() {
//   hideSearch();
// });

$(document).keyup(function(e) {
  if (e.key === "Escape") {
    hideSearch();
  }
});
