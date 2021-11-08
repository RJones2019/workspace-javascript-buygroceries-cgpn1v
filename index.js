// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyBl7J7Wd1Zq6_oa10KIlBp7OO4R-K5ar-k",
  authDomain: "csci225rj.firebaseapp.com",
  projectId: "csci225rj",
  storageBucket: "csci225rj.appspot.com",
  messagingSenderId: "120469188494",
  appId: "1:120469188494:web:cad0a933783eeb2a913edf",
  measurementId: "G-RE4C3773J3"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("grocery list")
    .add({
      item: value,
      name: "mom" //?
    });


  });

});
