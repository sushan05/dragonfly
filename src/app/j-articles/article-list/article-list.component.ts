import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from './../service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() baseUrlString : string;
  articlesData;

  constructor(private _artService : ArticleService) {}

  ngOnInit() {
    this._artService.setBaseUrl(this.baseUrlString);
    this._artService.getJoomlaArticles().subscribe(data => {
      this.articlesData = data['data']['data']['results'];
      console.log(this.articlesData);
    });
  }

  ngAfterContentInit(){
    console.log("!!!");
  }

  checkValue(){
    console.log(this.baseUrlString);
  }
}
