// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrVLDX7-PfSQ_xDBUUq-1dvIzfD_kTbNs',
  authDomain: 'practice-project-2305c.firebaseapp.com',
  projectId: 'practice-project-2305c',
  storageBucket: 'practice-project-2305c.firebasestorage.app',
  messagingSenderId: '254776204622',
  appId: '1:254776204622:web:43814e929f326dfbdb121f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
