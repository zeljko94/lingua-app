import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-tecajevi',
  templateUrl: './admin-tecajevi.component.html',
  styleUrls: ['./admin-tecajevi.component.scss']
})
export class AdminTecajeviComponent implements OnInit {
  //@ViewChild(NotificationListComponent) notsListComponent;

  tecajeviStore: any[] = [];
  tecajevi: any[] = [];

  mode: any = '';
  object: any = {
    predavacID: "-1"
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
    this.predavaci = this.predavaciStore.filter(p => p.vjestine.split(",").includes(this.object.vjestinaID));
    if(this.predavaci.length > 0){
      this.object.predavacID = this.predavaci[0].id;
    }
  }

  getJSON(){
    return JSON.stringify(this.object);
  }

  ngOnInit() {
    /*
    this.paginator.ps.emitter.subscribe(paginatedData => {
      this.tecajevi = paginatedData;
      this.changeMode('', null);
    });
*/
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
      console.log(rn);
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
    /*
    this.paginator.ps.paginate(this.tecajevi);
    this.paginator.ps.changePage(1);
    */
  }

  validateInput(){
    if(this.object.naziv){
      if(this.object.opis){
        if(this.object.vjestinaID > 0){
          if(this.object.predavacID > 0){
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
            this.swalService.err("Odaberite predavača!");
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
    this.router.navigate(['/admin/tecaj-details/' + id]);
  }

  spremi() {
    if(this.validateInput()){
      if(this.mode == 'Add') {
        this.object.sudionici = this.object.sudionici.toString();
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
/*
  spremi(){   
    if(this.validateInput()){
      if(this.mode == 'Add'){
        this.object.SudioniciID = this.object.SudioniciID.toString();
        this.tecajeviService.insert(this.object)
          .subscribe(data => {
            if(this.swalService.handleResponse(data)){
              this.tecajeviStore.push(data.Data);
              this.tecajevi = this.tecajeviStore.filter(t => t);

              // NOTIFY TECAJ INSERT
              this.notificationService.notifyTecajInsert(data.Data.ID, this.auth.getID())
                .subscribe(data => {
                  this.notsListComponent.add(data.Data);
                });
              this.changeMode('', null);
            }
          });
      }
      else if(this.mode == 'Update'){
        var copyObj = this.copy(this.object);
        copyObj.SudioniciID = this.object.destination.map(s => s.ID).toString();
        this.object.SudioniciID = copyObj.SudioniciID;
        delete copyObj["source"];
        delete copyObj["destination"];
        this.tecajeviService.update(copyObj)
          .subscribe(data => {
            if(this.swalService.handleResponse(data)){
              this.tecajeviService.getAll()
                .subscribe(data => {
                  this.tecajeviStore = data.Data;
                  this.tecajevi = this.tecajeviStore.filter(t => t);
                });
            }
          });
      }
    }
  }*/

  brisi(id){/*
    this.swalService.confirmDelete(
      () => {
        
        this.notificationService.notifyTecajDelete(id, this.auth.getID())
        .subscribe(data => {

        });
        
        this.tecajeviService.delete(id)
          .subscribe(data => {
            if(this.swalService.handleResponse(data)){
              this.tecajeviStore = this.tecajeviStore.filter(t => t.ID != id);
              this.tecajevi = this.tecajevi.filter(t => t.ID != id);
            }
          });
      },
      () => {}
    );*/
  }
}
