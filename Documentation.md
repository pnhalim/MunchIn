# Firebase 

## SDK setup

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

== Icons ==
material-ui design library
```
npm install @mui/material @emotion/react @emotion/styled
````

## Usage

Using Firebase v9. See ./components/firebase.js for initialization details. Using Firebase auth for user authentication and firestore for database storage.

See this amazing tutorial: https://www.youtube.com/watch?v=9zdvmgGsww0&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb

## Data Storage

Posts are stored in a collection called posts. User profiles are stored in a collection called users. The users collection is used in addition to the Firebase Auth data since Auth will only store certain amounts of data. The document id in the users collection corresponds to each user's uid from Firebase Auth.

# Redux 

The 'state' of the storage content is in ./app/store.js. For each of the objects in the store, you can create a reducer for it by creating a slice. 

The slice for the user's data is in userSlice.js. It defines functions for the user to call to update the store data, and also returns a reducer for the data. 

To update the store data: 
```
import { useDispatch } from 'react-redux';
import { your_reducer_function } from '../features/userSlice'
```
```
const dispatch = useDispatch();
```
```
dispatch(your_reducer_function(parameters_to_set_new_data))
```

# API call

The description for each user is randomly set when the register using a REST API call. Here is the API: https://api-ninjas.com/api/dadjokes. 

Actually, I switched to anotehr API because I think I got blocked from this one...oops I was calling it too much with buggy code. Anyways, I'm using this one now: https://icanhazdadjoke.com/api

You can see it being used in `Login.js`

# Animations

Using React Flip Move for animating new posts.
https://github.com/joshwcomeau/react-flip-move

Note, Flip move is no longer being maintained and is giving me console errors, so in the future, I will use this one.
https://github.com/aholachek/react-flip-toolkit 