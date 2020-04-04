import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unos-termina-modal',
  templateUrl: './unos-termina-modal.component.html',
  styleUrls: ['./unos-termina-modal.component.scss']
})
export class UnosTerminaModalComponent implements OnInit {

  toggleBtnText: string = 'asdasd';
  toggleBtnClass: string = 'btn btn-default';
  
  constructor() { }

  ngOnInit(): void {
  }

}
