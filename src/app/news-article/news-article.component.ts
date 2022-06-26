import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from '../misc/model';

@Component({
  selector: 'news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  @Input()
  newsArticle!: NewsArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
