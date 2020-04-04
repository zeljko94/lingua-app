import { Component, OnInit } from '@angular/core';


import * as $ from 'jquery';

@Component({
  selector: 'app-admin-add-predavac',
  templateUrl: './admin-add-predavac.component.html',
  styleUrls: ['./admin-add-predavac.component.scss']
})
export class AdminAddPredavacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  spremi(){
    $("#btnAddPredavachidden").click();
  }

  reset(){
    $("#btnResethidden").click();
  }
}
