import { Injectable } from '@angular/core';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getAuth() {
    return getAuth();
  }

  resgister(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  login(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  logInGoogle() {
    return signInWithPopup(getAuth(), new GoogleAuthProvider());
  }

  logOut() {
    return signOut(getAuth());
  }

  isAuthenticated() {
    const user = getAuth().currentUser;
    return user !== null;
  }

}
