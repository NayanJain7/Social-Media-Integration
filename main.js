function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
  }

  function onSignIn(googleUser) {
      console.log("Inside function")
    document.getElementById("logreg-forms").style.display = "none";
      document.getElementById("information").style.display = 'block';

    
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
   
    document.getElementById("image").src=profile.getImageUrl();
    document.getElementById("name").value=profile.getName();
    document.getElementById("email").value=profile.getEmail();

    // console.log('Full Name: ' + profile.getName());


  
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

  }
