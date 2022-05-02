import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: Observable<AngularFireAuth.User>;
  constructor(private httpClient: HttpClient, private angularFireAuth :AngularFireAuth) { 
    this.userData = angularFireAuth.authState;
  }
  isUserLoggedIn: boolean = false;
  TRENDING_NEWS_ENDPOINT: string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=177ca65797714cb0ad6b8f7ff6004549';
  getTrendingNews(): any {
    return this.httpClient.get(this.TRENDING_NEWS_ENDPOINT);
  }

  /* Sign in */
 login(email: string, password: string) {
  this.angularFireAuth
  .auth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You're in!');
  })
  .catch(err => {
  console.log('Something went wrong:',err.message);
  });
  }
}
