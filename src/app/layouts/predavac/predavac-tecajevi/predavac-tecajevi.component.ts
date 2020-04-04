import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-predavac-tecajevi',
  templateUrl: './predavac-tecajevi.component.html',
  styleUrls: ['./predavac-tecajevi.component.scss']
})
export class PredavacTecajeviComponent implements OnInit {
  //@ViewChild(NotificationListComponent) notsListComponent;

  tecajeviStore: any[] = [];
  tecajevi: any[] = [];

  mode: any = '';
  object: any = {
  };

  source:any[] = [];
  destination:any[] = [];

  checkAll: boolean = false;
  search: string;

  jezici: any[] = [];
  predavaciStore: any[] = [];
  predavaci: any[] = [];
  razine: any[] = [];
  tipoviNastave: any[] = [];

  ucenici: any[] = [];

  format = { add: 'Dodaj', remove: 'Ukloni', all: 'Označi sve', none: 'Odznači sve',
             direction: DualListComponent.LTR, draggable: true, locale: 'en' };


  dualListDisplay(o){
    return o.name + " " + o.lastname  + " - " + o.email;
  }

  
  constructor(public auth: AuthService,
              private http: HttpService,
              private router: Router,
              private swalService: SwalService,
            ) { }

              
  destinationChange(ev){
    this.object.sudionici = ev.map(e => e.id);
  }

  jezikChange(){
    
  }

  getJSON(){
    return JSON.stringify(this.object);
  }

  ngOnInit() {
    this.object.predavacID = this.auth.getUser().id;
    this.swalService.showLoading("Učitavanje podataka...", false);
    this.http.getAll('vjestine')
      .subscribe(data => {
        this.jezici = data;
      },
      err => {

      });

      this.http.getAll('users/predavaci')
      .subscribe(data => {
        this.predavaciStore = data;
        this.predavaci = data;
      },
      err => {
        this.swalService.hideLoading();
        console.log(err);
      });

      
      this.http.getAll('users/ucenici')
      .subscribe(data => {
        this.ucenici = data;
        this.source = data;
      },
      err => {
        this.swalService.hideLoading();
        console.log(err);
      });


      this.http.getAll('razine-nastave')
        .subscribe(data => {
          this.razine = data;
      },
      err => {
        this.swalService.hideLoading();
        console.log(err);
      });
        
      this.http.getAll('tipovi-nastave')
      .subscribe(data => {
        this.tipoviNastave = data;
        this.swalService.hideLoading();
      },
      err => {
        this.swalService.hideLoading();
        console.log(err);
      });

       this.http.getAll('tecajevi')
      .subscribe(data => {
       this.tecajeviStore = data;
       this.tecajevi = data;
       this.swalService.hideLoading();
      },
      err => {
        
      });
  }

  copy(o){
    return JSON.parse(JSON.stringify(o));
  }

  changeMode(md, rn){
    this.object = rn ? this.copy(rn) : {};
    this.mode = md;

    if(this.mode == 'Update'){
      this.object.vjestinaID = rn.vjestina.id;
      this.object.predavacID = rn.predavac.id;
      this.object.razinaNastaveID = rn.razina_nastave.id;
      this.object.tipNastaveID = rn.tip_nastave.id;

      var sudionici = rn.sudionici.map(s => s.id);
      this.source = this.copy(this.ucenici);
      this.destination = [];

      for(var i=0; i<this.ucenici.length; i++){
        if(sudionici.includes(this.ucenici[i].id)){
          this.destination.push(this.copy(this.ucenici[i]));
        }
      }
    }
    else if(this.mode == 'Add'){
      this.source = this.copy(this.ucenici);
      this.destination = [];
    }
  }

  applyFilters(){
    if(this.search != ''){
      if(this.search.length > 2){
        this.tecajevi = this.tecajeviStore.filter(rns => (rns.Naziv.toLowerCase().includes(this.search.toLowerCase()) || (rns.Opis.toLowerCase().includes(this.search.toLowerCase()))));
      }
      else{
        this.tecajevi = this.tecajeviStore;
      }
    }
    else{
      this.tecajevi = this.tecajeviStore;
    }
  }

  validateInput(){
    if(this.object.naziv){
      if(this.object.opis){
        if(this.object.vjestinaID > 0){
            if(this.object.razinaNastaveID > 0){
              if(this.object.tipNastaveID > 0){
                return true;
              }
              else{
                this.swalService.err("Odaberite tip nastave!");
                return false;
              }
            }
            else{
              this.swalService.err("Odaberite razinu tečaja!");
              return false;
            }
        }
        else{
          this.swalService.err("Odaberite jezik!");
          return false;
        }
      }
      else{
        this.swalService.err("Unesite opis tečaja!");
        return false;
      }
    }
    else{
      this.swalService.err("Unesite naziv tečaja!");
      return false;
    }
  }

  detalji(id){
    this.router.navigate(['/predavac/tecaj-details/' + id]);
  }

  spremi() {
    if(this.validateInput()){
      if(this.mode == 'Add') {
        this.object.sudionici = this.object.sudionici.toString();
        this.object.predavacID = this.auth.getUser().id;
        this.swalService.showLoading("Spremanje tečaja...");
        this.http.post('tecajevi', this.object)
          .subscribe(
          data => {
            this.tecajeviStore.push(data);
            this.swalService.hideLoading();
          },
          err => {    
            this.swalService.hideLoading();
          });
      }
      else if(this.mode == 'Update') {

      }
    }
  }

  brisi(id){
  }
}
