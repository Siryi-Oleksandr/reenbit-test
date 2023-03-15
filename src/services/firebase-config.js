/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: 'AIzaSyA-nu4r7aNOjXylQ6ZTdrj2OJKpgFkc6Ao',
  authDomain: 'cartoon-test-23.firebaseapp.com',
  projectId: 'cartoon-test-23',
  storageBucket: 'cartoon-test-23.appspot.com',
  messagingSenderId: '538306462430',
  appId: '1:538306462430:web:eb337e2b917ffdc54eb84f',
  measurementId: 'G-4M9GXBLGVJ',
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCXAXTV44yNHPEHp0qccw5czEfBJyaPOMs",
//   authDomain: "friendlychat-93.firebaseapp.com",
//   projectId: "friendlychat-93",
//   storageBucket: "friendlychat-93.appspot.com",
//   messagingSenderId: "751610345588",
//   appId: "1:751610345588:web:aa4b024433058c04477921",
// };

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
