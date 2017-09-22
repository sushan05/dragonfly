import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { HttpClientModule } from '@angular/common/http';

import { ArticleService } from './service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ArticleListComponent],
  exports : [ArticleListComponent],
  providers : [ArticleService]
})
export class JArticlesModule {}
