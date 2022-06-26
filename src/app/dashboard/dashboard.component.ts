import { Component, OnInit } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { NewsAPIService } from '../news-api.service';
import { INewsArticle } from '../misc/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private newsAPIService: NewsAPIService) { }
  newsArticles: INewsArticle[] = [];

  ngOnInit(): void {
    this.newsAPIService.getTrendingNews().subscribe(
      response => {
        if (response.status === 'ok') {
          this.newsArticles = response.articles;
          console.log(this.newsArticles);
        } else {
          console.error(response.code, response.message);
        }
      }, error => {
        console.error(error);
      }
    );
  }

}
