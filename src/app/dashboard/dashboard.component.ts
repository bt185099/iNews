import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../news-api.service';
import { NewsArticle } from '../misc/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private newsAPIService: NewsAPIService) { }
  newsArticles: NewsArticle[] | undefined;

  ngOnInit(): void {
    this.newsAPIService.getTrendingNews().subscribe(
      response => {
        if (response.status === 'ok') {
          this.newsArticles = response.articles;
          console.log(this.newsArticles);
        } else {
          console.error(response.code, response.message);
          //TODO
          //Navigate to the error page
        }
      }, error => {
        console.error(error);
          //TODO
          //Navigate to the error page
      }
    );
  }

}
