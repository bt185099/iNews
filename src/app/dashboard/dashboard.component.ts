import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  newsArticles: any;

  ngOnInit(): void {
    this.newsArticles = this.loginService.getTrendingNews();
    console.log(this.newsArticles);
    
  }

}
