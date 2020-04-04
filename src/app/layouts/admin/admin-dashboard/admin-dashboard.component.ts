import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptsService } from 'src/app/services/scripts.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {

  constructor(
    public scrtipsService: ScriptsService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scrtipsService.loadScript('assets/template/dist/js/adminlte.min.js');
    this.scrtipsService.loadScript('assets/template/dist/js/pages/dashboard.js');
    this.scrtipsService.loadScript('assets/template/dist/js/demo.js');
  }
}
