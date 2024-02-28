//프로젝트 버전 확인
importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging.js");

const config = {
    apiKey: "AIzaSyD2mDggVciElDed71T32WQmAt2WxSaShTo",
    authDomain: "mom-project-12682.firebaseapp.com",
    projectId: "mom-project-12682",
    storageBucket: "mom-project-12682.appspot.com",
    messagingSenderId: "856453475799",
    appId: "1:856453475799:web:5c53dbe23eae09f3e5af92",
    measurementId: "G-E07EQ84THQ"
};

// Initialize Firebase
firebase.initializeApp(config);

const messaging = firebase.messaging();

//백그라운드 서비스워커 설정
// hmm
messaging.onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: payload,
    icon: "/firebase-logo.png",
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});