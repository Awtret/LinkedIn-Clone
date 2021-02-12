import firebase from "firebase" 


const firebaseConfig = {
    apiKey: "AIzaSyDdKV2O-J0jxm0ebbw2jw0iTvW-eDcoYWI",
    authDomain: "linkedin-clone-81ff1.firebaseapp.com",
    projectId: "linkedin-clone-81ff1",
    storageBucket: "linkedin-clone-81ff1.appspot.com",
    messagingSenderId: "205115432988",
    appId: "1:205115432988:web:f41df67fe396094f9fffd9"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export{db,auth};