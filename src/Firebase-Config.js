import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // added

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3-XCN8cD_tIbG2FFEIc-tHwg7E2UauOU",
  authDomain: "video-blog-dc957.firebaseapp.com",
  databaseURL: "https://video-blog-dc957-default-rtdb.firebaseio.com",
  projectId: "video-blog-dc957",
  storageBucket: "video-blog-dc957.appspot.com",
  messagingSenderId: "33426294739",
  appId: "1:33426294739:web:9f3b6925433298d59b1126",
};

// // Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const authentication = getAuth(firebaseApp);
