import { GlobalStyle } from 'GlobalStyle';
import CharacterDetails from 'pages/CharacterDetails/CharacterDetails';
import Characters from 'pages/Characters/Characters';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../services/firebase-config';
// import { FireBaseService } from '../services/firebase';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

function App() {
  const [isUser, setIsUser] = useState(false);

  async function signIn() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  async function signOutUser() {
    await signOut(getAuth());
  }

  function initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  function authStateObserver(user) {
    if (user) {
      let profilePicUrl = getProfilePicUrl();
      let userName = getUserName();
      setIsUser(true);
      console.log('authStateObserver працює');
    } else {
      setIsUser(false);
      console.log('authStateObserver працює це false');
    }
  }

  function isUserSignedIn() {
    return !!getAuth().currentUser;
  }

  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL;
  }

  // Returns the signed-in user's display name.
  function getUserName() {
    return getAuth().currentUser.displayName;
  }

  // Adds a size to Google Profile pics URLs.
  function addSizeToGoogleProfilePic(url) {
    if (
      url.indexOf('googleusercontent.com') !== -1 &&
      url.indexOf('?') === -1
    ) {
      return url + '?sz=150';
    }
    return url;
  }

  // !1111111111111111111111111111111111111111111111111111111111

  const firebaseAppConfig = getFirebaseConfig();
  initializeApp(firebaseAppConfig);
  initFirebaseAuth();

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              isUser={isUser}
              signIn={signIn}
              signOutUser={signOutUser}
            />
          }
        />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </Container>
  );
}

export default App;
