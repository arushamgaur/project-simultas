const firebaseConfig = {
    apiKey: "AIzaSyAtazG8EuDoqqYOYgeequkN2QFiutNIZN4",
    authDomain: "simultas-ee3ac.firebaseapp.com",
    databaseURL: "https://simultas-ee3ac-default-rtdb.firebaseio.com",
    projectId: "simultas-ee3ac",
    storageBucket: "simultas-ee3ac.appspot.com",
    messagingSenderId: "501929975387",
    appId: "1:501929975387:web:e4032056d52c8a104e697e"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  //referencing database
 var loginformdb = firebase.database().ref('loginForm');

 document.getElementById("loginForm").addEventListener('submit',submitForm)

 document.getElementById("SignUp").addEventListener("submit",submitForm)

 function submitForm(e){
    e.preventDefault();
    var name=getElementVal("Uname")
    var email=getElementVal("uemail");
    var password=getElementVal("password");

    console.log(email,password);

 }

 const getElementVal=(id)=>{
    return document.getElementById(id).value;
 }