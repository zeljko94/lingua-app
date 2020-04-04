import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ucenici-list',
  templateUrl: './ucenici-list.component.html',
  styleUrls: ['./ucenici-list.component.scss']
})
export class UceniciListComponent implements OnInit, AfterViewInit {
  @Input() role = '';
  @ViewChild('searchRef') searchRef;

  search: any = '';
  searchBy: any = '1';

  addUcenikRoute = '';

  mode: any = '';
  object: any = {};

  ucenici: any[] = [];
  uceniciStore: any[] = [];
  
  constructor(
    private router: Router,
    private swal: SwalService,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.swal.showLoading("Učitavanje podataka...", false);
    this.http.getAll('users/ucenici')
      .subscribe(data => {
        this.swal.hideLoading();
        this.ucenici = data;
        this.uceniciStore = data;
      },
      err => {
        this.swal.hideLoading();
      });
  }

  ngAfterViewInit(): void {
    this.searchRef.nativeElement.focus();
  }
  
  rowClick(p){
    if(this.role){
      this.router.navigate(['/' + this.role + '/ucenik-details/' + p.id]);
    }
  }

  
  searchByChange(){
    if(this.search){
      if(this.search != ''){
        this.applyFilters();
      }
    }
  }

  applyFilters(){
    if(this.search != ''){
      if(this.search.length > 2){
        if(this.searchBy == "2"){
          this.ucenici = this.uceniciStore.filter(rns => ((rns.name + " " + rns.lastname).toLowerCase().includes(this.search.toLowerCase())));
        }
        else if (this.searchBy == "1"){
          this.ucenici = this.uceniciStore.filter(rns => ((rns.RFID.toLowerCase().includes(this.search.toLowerCase())) || (rns.RFID.toLowerCase().includes(this.search.toLowerCase()))));
        }
        else if(this.searchBy == "3"){

        }
      }
      else{
        this.ucenici = this.uceniciStore;
      }
    }
    else{
      this.ucenici = this.uceniciStore;
    }
  }



  brisi(id){ 
    this.swal.confirmDelete(
      () => {
    this.swal.showLoading("Brisanje korisnika", false);
    this.http.delete('users', id)
      .subscribe(data => {
        this.swal.hideLoading();
        this.swal.ok(data);
        this.uceniciStore = this.uceniciStore.filter(p => p.id != id);
        this.ucenici = this.ucenici.filter(p => p.id != id);
      },
      err => {
        this.swal.hideLoading();
        this.swal.err(err.error);
      });
      },
      () => {}
    );
  }
}

