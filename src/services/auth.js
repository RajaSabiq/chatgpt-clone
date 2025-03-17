import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase.js';

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert('Successfully User created');
    })
    .catch((err) => {
      alert(err['message']);
    })
    .finally(() => {});
};
const login = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert('Successfully User Login');
      navigate('/chat');
    })
    .catch((err) => {
      alert(err['message']);
    })
    .finally(() => {});
};

export { createUser, login };
