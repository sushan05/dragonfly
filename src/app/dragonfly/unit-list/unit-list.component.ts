import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DragonService } from './../dragon.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-unite-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css'],
  providers:[DragonService]
})
export class UnitListComponent implements OnInit {

  @Input() apiUrl : string = 'default';
  @Input() dataNode;
  @Input() tableHeader;
  @Input() tableClass;
  @Input() methodCall = 'get';
  @Input() dataTotalNode;
  @Input() postBodyStr;
  @Input() postBodyNodeDetails;
  @Input() showPagination = false;

  dynamicOffset = 0;

  // resultData;

  // @Output() getUrlData: EventEmitter<any> = new EventEmitter<any>();
  // checkingVariable = "here's the value";

  constructor(private _httpClient : HttpClient, private _dragService : DragonService) {}

  ngOnInit() {
    // this._dragService.getData(this.apiUrl, this.methodCall, this.dataNode).subscribe(gotData => {
    //     this.resultData = gotData;
    // });
  }

  paginateChange($event){
    this.dynamicOffset = $event;
  }

}
