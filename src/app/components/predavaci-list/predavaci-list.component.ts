import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SanitizerService } from 'src/app/services/sanitizer.service';

@Component({
  selector: 'app-predavaci-list',
  templateUrl: './predavaci-list.component.html',
  styleUrls: ['./predavaci-list.component.scss']
})
export class PredavaciListComponent implements OnInit, AfterViewInit {
  @Input() loggedUserPrivileges = '';

  @ViewChild('searchRef') searchRef;

  search: any = '';
  searchBy: any = '1';

  predavaci: any[] = [];
  predavaciStore: any[] = [];
  users: any[] = [];

  constructor(
    private swal: SwalService,
    private router: Router,
    private http: HttpService,
    private sanitizer: SanitizerService
  ) { }

  ngOnInit(): void {
    this.swal.showLoading("Učitavanje podataka...", false);
    this.http.getAll('users/predavaci')
      .subscribe(data => {
        this.swal.hideLoading();
        this.predavaci = data;
        this.predavaciStore = data;
        /*for(var i=0; i<this.predavaci.length; i++){
          this.sanitizer.usrProfileImg(this.predavaci[i]);
        }*/
      },
    err => {
      this.swal.hideLoading();
      //this.swal.err("Greška prilikom učitavanja podataka!");
    });
  }

  ngAfterViewInit() {
    this.searchRef.nativeElement.focus();
  }
  
  rowClick(p){
    this.router.navigate(['/admin/predavac-details/' + p.ID]);
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
          this.predavaci = this.predavaciStore.filter(rns => ((rns.Name + " " + rns.LastName).toLowerCase().includes(this.search.toLowerCase())));
        }
        else if (this.searchBy == "1"){
          this.predavaci = this.predavaciStore.filter(rns => ((rns.RFIDCard.toLowerCase().includes(this.search.toLowerCase())) || (rns.RFIDPrivjesak.toLowerCase().includes(this.search.toLowerCase()))));
        }
        else if(this.searchBy == "3"){

        }
      }
      else{
        this.predavaci = this.predavaciStore;
      }
    }
    else{
      this.predavaci = this.predavaciStore;
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
        this.predavaciStore = this.predavaciStore.filter(p => p.id != id);
        this.predavaci = this.predavaci.filter(p => p.id != id);
      },
      err => {
        this.swal.hideLoading();
      });
      },
      () => {}
    );
    /*
    if(this.loggedUserPrivileges == 'admin'){
      this.swal.confirmDelete(
        () => {
          this.swal.showLoading("Brisanje predavača...", false);
          this.notificationService.notifyPredavacDelete(id, this.auth.getID())
            .subscribe(data => {});
            
          this.predavaciService.delete(id)
            .subscribe(
              data => {
                this.swal.hideLoading();
                if(data.StatusCode > 0){
                  this.predavaciStore = this.predavaciStore.filter(p => p.ID != id);
                  this.predavaci = this.predavaci.filter(p => p.ID != id);
                  this.swal.ok("Korisnik uspješno obrisan!");
                }
                else{
                  this.swal.err("Korisnik uspješno obrisan!");
                }
              },
              err => {
                this.swal.hideLoading();
              });
        },
        () => {}
      );
    } */
  }


}
