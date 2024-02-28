import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyD2mDggVciElDed71T32WQmAt2WxSaShTo",
    authDomain: "mom-project-12682.firebaseapp.com",
    projectId: "mom-project-12682",
    storageBucket: "mom-project-12682.appspot.com",
    messagingSenderId: "856453475799",
    appId: "1:856453475799:web:5c53dbe23eae09f3e5af92",
    measurementId: "G-E07EQ84THQ"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

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

requestPermission();