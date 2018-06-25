import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);


const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child(`Todos`);


/*
  todosRef.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
*/


export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();