import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { User } from './model/User';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any; // Save logged in user data
  constructor(private httpClient: HttpClient, public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  isUserLoggedIn: boolean = false;
  TRENDING_NEWS_ENDPOINT: string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=177ca65797714cb0ad6b8f7ff6004549';
  getTrendingNews(): any {
    return this.httpClient.get(this.TRENDING_NEWS_ENDPOINT);
  }

  /* Sign in */
  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
