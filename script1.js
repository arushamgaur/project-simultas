document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
// setting up firebase with website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyAtazG8EuDoqqYOYgeequkN2QFiutNIZN4",
authDomain: "simultas-ee3ac.firebaseapp.com",
databaseURL: "https://simultas-ee3ac-default-rtdb.firebaseio.com",
projectId: "simultas-ee3ac",
storageBucket: "simultas-ee3ac.appspot.com",
messagingSenderId: "501929975387",
appId: "1:501929975387:web:e4032056d52c8a104e697e" 
});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//    signup function
const signUp=() => {
    const email = document.getElementById("suemail").value;
    const password = document.getElementById("supassword").value;
	console.log(email,password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("You are Signed Up");
	console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
	console.log(error.message);
    // ..
  });
};

const signIn = () => {
	const email = document.getElementById("siemail").value;
  console.log(email);
    const password = document.getElementById("sipassword").value;
	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // document.write("You are Signed In");
    window.location.href = "home.html";
	console.log(result);
  })
  .catch((error) => {
    console.log(error.code);
	console.log(error.message);
  });

};

// JavaScript for handling the form submission
document.getElementById("siemail").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  // Get the entered username and password
  const email = document.getElementById("siemail").value;
  const password = document.getElementById("sipassword").value;

  // Perform client-side validation (You should do server-side validation for security)
  if (email === "your_valid_username" && password === "your_valid_password") {
      // Redirect to the desired page
      window.location.href = "home.html";
  } else {
      alert("Invalid credentials. Please try again.");
  }
});