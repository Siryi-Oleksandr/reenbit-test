// Import the functions you need from the SDKs you need

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

// import { getFirebaseConfig } from '../js/firebase-config';
// import { refs } from '../js/refs';
// import { onCloseModal } from '../js/registr-modal';
// import { toggleModal } from '../js/modal';
// import { Report } from 'notiflix/build/notiflix-report-aio';

export class FireBaseService {
  constructor() {
    this.NAME_COLLECTION_FILESTORAGE = 'storage_filmoteka';
    this.afterLogin = null;
  }
  // Signs-in Movie cabinet.
  async signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  // Signs-out of Friendly Chat.
  async signOutUser() {
    // Sign out of Firebase.
    await signOut(getAuth());
    // window.location.href = './index.html';
  }

  // Initialize firebase auth
  initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  // Listen to auth state changes for using in diferent pages
  // observer = user => {
  //   authStateObserver(user);

  //   if (user && typeof this.afterLogin === 'function') {
  //     this.afterLogin();
  //   }
  // };

  // Returns true if a user is signed-in.
  isUserSignedIn() {
    return !!getAuth().currentUser;
  }
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    let profilePicUrl = getProfilePicUrl();
    let userName = getUserName();
    console.log(`I am user ${userName}`);
    // Set the user's profile pic and name.
    // refs.userPicElement.style.backgroundImage =
    // 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    // refs.userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    // refs.userInfoElement.classList.remove('visually-hidden');
    // refs.signOutButtonElement.classList.remove('visually-hidden');

    // Hide sign-in button.
    // refs.signInButtonElement.classList.add('visually-hidden');
  } else {
    console.log('not user 😪');
    // User is signed out!
    // Hide user's profile and sign-out button.
    // refs.userInfoElement.classList.add('visually-hidden');
    // refs.signOutButtonElement.classList.add('visually-hidden');

    // Show sign-in button.
    // refs.signInButtonElement.classList.remove('visually-hidden');
  }
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL;
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return url + '?sz=150';
  }
  return url;
}
