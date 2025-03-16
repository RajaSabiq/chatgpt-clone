import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase.js';

const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert('Successfully User created');
    })
    .catch((err) => {
      alert(err['message']);
    })
    .finally(() => {});
};
const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert('Successfully User Login');
    })
    .catch((err) => {
      alert(err['message']);
    })
    .finally(() => {});
};

export { createUser, login };
