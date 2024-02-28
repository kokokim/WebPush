import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const config = {
    apiKey: "AIzaSyD2mDggVciElDed71T32WQmAt2WxSaShTo",
    authDomain: "mom-project-12682.firebaseapp.com",
    projectId: "mom-project-12682",
    storageBucket: "mom-project-12682.appspot.com",
    messagingSenderId: "856453475799",
    appId: "1:856453475799:web:5c53dbe23eae09f3e5af92",
    measurementId: "G-E07EQ84THQ"
};

const app = initializeApp(config);
const messaging = getMessaging();

//토큰값 얻기
getToken(messaging, {
  vapidKey:
    "BCh_SpKxnUE5FHyCMOrq-akjUmgWXgP9eey0jIq7S6suIaeZDVKJRaU50eu0NVNx-fs4m-nQHeyVRepLMzMf1zA",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

//포그라운드 메시지 수신
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});