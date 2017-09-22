import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  myTableHeaders = {};

  constructor() {
    this.myTableHeaders   = [
                                {label : "Country Name", identifier : ['name']},
                                {label : "Capital", identifier : ['capital']},
                                {label : "Region", identifier : ['region']},
                                {label : "Sub region", identifier : ['subregion']},
                                {label : "Population", identifier:['population']}
                            ];
  }

  ngOnInit() {
  }

}
