import { Component } from '@angular/core';
import { DragonService } from './dragonfly/dragon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DragonService]
})
export class AppComponent {
  title = 'app works!';
  myData;
  myApiUrl;
  myTableHeaders;
  myDataNode;
  myServiceData;
  myDataTotalNode;
  myPostBodyStr;
  myPostBodyNodeDetails;

  constructor(private _dragSer : DragonService){
    this.myApiUrl         = "http://truck-app-prod.lteservers.com/api/truck/jobs?key=ab535026262c47bd65f7524be478584c&limit=10";
    this.myDataNode       = ['_body','result', 'data'];
    this.myDataTotalNode  = ['_body','result', 'totalResult'];
    this.myTableHeaders   = [
                                {label : "Job Id", identifier : ['job_id']},
                                {label : "Driver Name", identifier : ['driver', 'driver_first_name']},
                                {label : "Agency Name", identifier : ['agency', 'agency_name']}
                            ];

    this.myPostBodyStr    = {
                              "request":{
                                          "limit": '',
                                          "offset" :''
                                        }
                            };

    this.myPostBodyNodeDetails = {
                                   limit : { nodeDetail : 'recordsPerPage', initialValue : 20},
                                   offset : { nodeDetail : 'offset', initialValue : 0}
                                }

    


    // this.myApiUrl = "http://demo.appcarvers.com/junite/index.php?option=com_api&app=content&resource=articles&format=raw&lang=en";
    // this.myDataNode = ['data','data', 'results'];
    // this.myTableHeaders =[
    //                         {label : "Image", identifier : ['images', 'intro_image'], displayType : 'image'},
    //                         {label : "Title", identifier : ['title']},
    //                         {label : "Categroy", identifier : ['catid', 'title']}
    //                      ];

    // this._dragSer.getData(this.myApiUrl, '' ,this.myDataNode);
    // this._dragSer.servItems.subscribe(data => {
    //                                     this.myServiceData = data;
    //                                     console.log(this.myServiceData);
    //                                   });

    // this._dragSer.getData('http://truck-app-prod.lteservers.com/api/truck/jobs?key=8c58e82abfad2cbcfac5a3043d30ac802a8cb585', 'post').subscribe(data => {
    //                                       console.log("asdklfjklajslkeryaeyt " , data);
    //                                     });
  }

  chekcing(param){
    console.log(param);
  }

}
