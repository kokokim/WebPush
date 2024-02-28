// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getAnalytics, onMessage} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2mDggVciElDed71T32WQmAt2WxSaShTo",
  authDomain: "mom-project-12682.firebaseapp.com",
  projectId: "mom-project-12682",
  storageBucket: "mom-project-12682.appspot.com",
  messagingSenderId: "856453475799",
  appId: "1:856453475799:web:5c53dbe23eae09f3e5af92",
  measurementId: "G-E07EQ84THQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const message=getMessaging(app);
const analytics = getAnalytics(app);

async function requestPermission() {
  console.log("권한 요청 중...");

  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    console.log("알림 권한 허용 안됨");
    return;
  }

  console.log("알림 권한이 허용됨");

  const token = await getToken(messaging, {
    vapidKey: "BCh_SpKxnUE5FHyCMOrq-akjUmgWXgP9eey0jIq7S6suIaeZDVKJRaU50eu0NVNx-fs4m-nQHeyVRepLMzMf1zA",
  });

  if (token) console.log("token: ", token);
  else console.log("Can not get Token");

  onMessage(messaging, (payload) => {
    console.log("메시지가 도착했습니다.", payload);
    // ...
  });
}
