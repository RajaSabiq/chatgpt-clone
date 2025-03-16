import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAau7yvxB2RYboVGGq42lSfIyHMf7KJLbE',
  authDomain: 'chat-gpt-clone-d056c.firebaseapp.com',
  projectId: 'chat-gpt-clone-d056c',
  storageBucket: 'chat-gpt-clone-d056c.firebasestorage.app',
  messagingSenderId: '758017043579',
  appId: '1:758017043579:web:3d36e9f5086fc9f7f246de',
  measurementId: 'G-B1CETXGKFF',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };
