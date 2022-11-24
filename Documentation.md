== Firebase SDK setup ==
```
npm install firebase
```

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvNoqaTSDPoQ7rIpc_Ol2Pr5cWvukyT6U",
  authDomain: "linkedin-clone-b2b45.firebaseapp.com",
  projectId: "linkedin-clone-b2b45",
  storageBucket: "linkedin-clone-b2b45.appspot.com",
  messagingSenderId: "384515724146",
  appId: "1:384515724146:web:bfdbc655c1025e817783eb",
  measurementId: "G-8ESC8FMKE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

```
npm install -g firebase-tools
```
