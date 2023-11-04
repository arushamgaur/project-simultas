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
    const email = document.getElementById("uemail").value;
    const password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}