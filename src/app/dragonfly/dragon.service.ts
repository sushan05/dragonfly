import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Http, Headers, Request } from '@angular/http';

@Injectable()
export class DragonService {

  @Output() servItems = new EventEmitter<any>();
  _headersClient;
  _headers;
  _request;

  constructor(private _httpClient : HttpClient, private _http : Http) {
    this._headersClient = new HttpHeaders();
    this._headers = new Headers();
  }

  getData(apiUrl : string, callType? : string, dataNode? : Array<string>, dataTotalNode?, postBody?){

    var callingUrl;
    if(callType && callType.toLowerCase() == 'post')
    {
      callingUrl = this._http.post(apiUrl, postBody, {});
    }
    else
    {
      callingUrl = this._httpClient.get(apiUrl)
    }

    return callingUrl
      .map(response => {

        var returnObj = {};

        if(dataNode && dataNode.length)
        {
          var tempOutput = response;

          dataNode.forEach((element, index) => {
            if(typeof tempOutput != 'object')
            {
              tempOutput = JSON.parse(tempOutput);
            }

            var ijk = tempOutput[element];
            tempOutput = ijk;
          });
          // return tempOutput
          returnObj['data'] = tempOutput;
        }
        else
        {
          returnObj['data'] = response;
          // return response;
        }

        if(dataTotalNode && dataTotalNode.length)
        {
          var tempTotal = response;

          dataTotalNode.forEach((element, index) => {
            if(typeof tempTotal != 'object' && index != dataTotalNode.length)
            {
              tempTotal = JSON.parse(tempTotal);
            }
            var ijk = tempTotal[element];
            tempTotal = ijk;
          });

          returnObj['total'] = tempTotal;
        }

        return returnObj;
      })
  }
}
