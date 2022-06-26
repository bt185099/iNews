import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsAPIResponse } from './misc/model';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private httpClient: HttpClient) { }
  isUserLoggedIn: boolean = false;
  TRENDING_NEWS_URL: string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=177ca65797714cb0ad6b8f7ff6004549';

  getTrendingNews(): Observable<NewsAPIResponse> {
    return this.httpClient.get<NewsAPIResponse>(this.TRENDING_NEWS_URL);
  }
}
