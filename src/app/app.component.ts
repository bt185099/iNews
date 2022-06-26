import { Component } from '@angular/core';
import { NewsAPIService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'iNews';
  loginStatus: boolean = true;
  constructor(newsAPIService: NewsAPIService){

  }
}
