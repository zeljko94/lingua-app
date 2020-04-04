import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-add-ucenik',
  templateUrl: './admin-add-ucenik.component.html',
  styleUrls: ['./admin-add-ucenik.component.scss']
})
export class AdminAddUcenikComponent implements OnInit {

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
