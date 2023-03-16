import { GlobalStyle } from 'GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Container } from './App.styled';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../services/firebase-config';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import CharacterDetails from 'pages/CharacterDetails/CharacterDetails';
import Characters from 'pages/Characters/Characters';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isUser, setIsUser] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userImage, setUserImage] = useState(null);

  //  function for work with authentification
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
      setUserImage(profilePicUrl);
      setUserName(userName);
    } else {
      setIsUser(false);
    }
  }

  // useful function for future
  // function isUserSignedIn() {
  //   return !!getAuth().currentUser;
  // }

  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL;
  }

  // Returns the signed-in user's display name.
  function getUserName() {
    return getAuth().currentUser.displayName;
  }

  // ! init fireBase

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
              userName={userName ?? 'unknown'}
              userImage={userImage ?? 'unknown'}
              signIn={signIn}
              signOutUser={signOutUser}
            />
          }
        />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
      <ToastContainer position="top-center" autoClose={2500} />
    </Container>
  );
}

export default App;
