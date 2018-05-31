firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.alert("přihlášeno");
  } else {
   window.alert("NE-přihlášeno");
  }
});


function login () 
{
var userEmail = document.getElementById('email').value;
var password = document.getElementById('password').value;

firebase.auth().signInWithEmailAndPassword(userEmail, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  window.alert("Chyba: " + errorMessage);
});
}

function logout() 
{

	var userEmail = document.getElementById('email').value;
 	var password = document.getElementById('password').value;

 	firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}



