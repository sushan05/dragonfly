import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService{
    baseUrl : string;

    constructor(private _httpClient : HttpClient){}

    setBaseUrl(baseUrl){
        this.baseUrl = baseUrl;
    }

    getJoomlaArticles(){
        var articleUrl = this.baseUrl + "/index.php?option=com_api&app=content&resource=articles&format=raw&lang=en";
        return this._httpClient.get(articleUrl);
    }
}