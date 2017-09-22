import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginate-list',
  templateUrl: './paginate-list.component.html',
  styleUrls: ['./paginate-list.component.css']
})
export class PaginateListComponent implements OnInit {

  @Input() initialOffset;
  @Input() recordsPerPage;
  @Input() totalPages;

  @Input() postBodyStr;
  @Input() postBodyNodeDetails;

  @Output() change = new EventEmitter();

  locTotalRecords;
  pageCount;
  pageNumbers;
  fieldMapping = {};

  @Input() set totalRecords(thisVal){
    if (thisVal != null)
    {
      this.locTotalRecords = thisVal;

      for (var key in this.postBodyNodeDetails) {
        if (this.postBodyNodeDetails.hasOwnProperty(key)) {
          var element = this.postBodyNodeDetails[key];

          switch(element['nodeDetail']){
            case "recordsPerPage" :
                  this.recordsPerPage = element['initialValue'];
                  this.fieldMapping['recordsPerPage'] = key;
                break;
            case "offset" :
                  this.initialOffset = element['initialValue'];
                  this.fieldMapping['offset'] = key;
                break;
          }
        }
      }

      this.pageCount = Math.ceil(parseInt(thisVal) / parseInt(this.recordsPerPage));
      this.pageNumbers = Array(this.pageCount).fill(0).map((x,i)=>i + 1);
    }
  };

  constructor() { }

  ngOnInit() {
  }

  loadNextPage(){
    var currentOffset = this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue'];
    var nextOffset    = currentOffset + this.recordsPerPage;

    if(nextOffset < this.locTotalRecords)
    {
      this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue'] += this.recordsPerPage;
      this.change.emit(this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue']);
      this.initialOffset = this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue'];
    }

    return;
  }

  loadPrevPage(){
    var currentOffset = this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue'];
    var prevOffset    = currentOffset - this.recordsPerPage;

    if(prevOffset >= 0)
    {
      this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue'] -= this.recordsPerPage;
      this.change.emit(this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue']);
      this.initialOffset = this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue'];
    }

    return;
  }

  loadThisPage(pgNo){
    var pgOffset = (parseInt(pgNo) - 1) * parseInt(this.recordsPerPage);

    this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue'] = pgOffset;
    this.initialOffset = pgOffset;
    this.change.emit(this.postBodyNodeDetails[this.fieldMapping['offset']]['initialValue']);
  }
}
