import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  isUserLoggedIn: boolean = false;
  TRENDING_NEWS_ENDPOINT: string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=177ca65797714cb0ad6b8f7ff6004549';
  getTrendingNews(): any {
    return this.httpClient.get(this.TRENDING_NEWS_ENDPOINT);
  }
}
