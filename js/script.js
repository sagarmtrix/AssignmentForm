 /* function myFunction() {

                                              var fname = document.getElementById("fname").value;
                                              submitOK = "true";

                                              if (fname.length > 255) {
                                                  alert("Enter only five characters");
                                                  submitOK = "false";
                                              } else if (fname.length <= 0) {
                                                  alert("Enter the Comment")
                                              } else {
                                                  alert("Your Comment is Received");
                                              }

                                          }

                                          function save() {
                                              var dataToSave = document.getElementById("fname").value;
                                              localStorage.setItem("data", dataToSave);

                                          }

                                          function show() {
                                              var dataToShow = localStorage.getItem("data");
                                              alert("Saved value is =" + dataToShow)
                                              location.reload();
                                          }

                                          function myFunction1() {

                                              var fname1 = document.getElementById("fname1").value;
                                              submitOK = "true";

                                              if (fname1.length > 255) {
                                                  alert("Enter only five characters");
                                                  submitOK = "false";
                                              } else if (fname1.length <= 0) {
                                                  alert("Enter the Comment")
                                              } else {
                                                  alert("Your Comment is Received");
                                              }
                                              var dataToSave = document.getElementById("fname1").value;
                                              localStorage.setItem("data", dataToSave);
                                          }

                                          function save1() {

                                          }

                                          function show1() {
                                              var dataToShow = localStorage.getItem("data");
                                              alert("Saved value is =" + dataToShow);
                                              location.reload();

                                          } */
 /* function myFunction() {
     var txt;
     var person = prompt("Please enter your name:", "Sagar");
     if (person == null || person == "") {
         txt = "User cancelled the prompt.";
     } else {
         txt = "Hello " + person + "! How are you today?";
     }
     document.getElementById("demo").innerHTML = txt;
 } */
 /*  function initElement() {
      var p = document.getElementById("foo");
      p.onclick = showAlert;
  };

  function showAlert(event) {
      alert("username created!");
  } */

 function validateForm() {
     var x = document.forms["mypage"]["name"].value;
     if (x == "") {
         alert("Name must be filled out");
         return false;
     }
 }