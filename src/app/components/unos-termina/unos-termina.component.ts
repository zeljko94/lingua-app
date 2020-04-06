import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { SwalService } from 'src/app/services/swal.service';
import { moment } from 'fullcalendar';

@Component({
  selector: 'app-unos-termina',
  templateUrl: './unos-termina.component.html',
  styleUrls: ['./unos-termina.component.scss']
})
export class UnosTerminaComponent implements OnInit {
  @Input() colSize: string = 'col-md-4';
  @Input() nastavaID: any = 0;
  @Input() nastava: boolean = true;
 
  @Output() addEmitter = new EventEmitter();
 
   tecajevi: any[] = [];
   ucionice: any[] = [];
   termin: any = { };
   pocetak: any;
   zavrsetak: any;
   errors: any = '';
 
   constructor(private http: HttpService,
               public auth: AuthService,
               private swal: SwalService) { }
 
   ngOnInit() {
    this.termin.tecaj_id = '0';
    this.termin.ucionica_id = '0';

    this.http.getAll('ucionice')
       .subscribe(data => {
         this.ucionice = data;
       },
       err => {

       });
       
    this.http.getAll('tecajevi')
       .subscribe(data => {
          this.tecajevi = data;
       },
       err => {

       });
   }
 
   addTermin(){
     if(this.isInputValid()){
      this.termin = {
        pocetniDatum: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        zavrsniDatum: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        title: 'Naslov eventa',
        user_id: 1,
        ucionica_id: 1,
        tecaj_id: 1
      };
 
      this.http.post('termini', this.termin)
       .subscribe(
         data => {
           this.addEmitter.emit(data);
         },
         err => {
         }
       );
     }
     /*
     if(this.isInputValid()){
       this.http.post("TerminNastava/IsSlobodanTermin", this.termin)
       .subscribe(data => {
         this.errors = data ? "" : "Odabrana učionica je zauzeta u zadanom periodu!";
 
         if(data){
           this.http.postJWT("TerminNastava/Insert", this.termin)
             .subscribe(data => {
               if(this.swal.handleResponse(data)){
                 this.addEmitter.emit(data.Data);
 
                 this.notificationService.notifyTerminInsert(data.Data.ID, this.auth.getID())
                   .subscribe(data => {});
               }
             });
         }
       });
 
     }*/
   }
 
   onChange(){/*
     if(this.isInputValid(false)){
       this.http.postJWT("TerminNastava/IsSlobodanTermin", this.termin)
       .subscribe(data => {
         this.errors = data.Data ? "" : "Odabrana učionica je zauzeta u zadanom periodu!";
       });
     }
     else{
       this.errors = "";
     }*/
   }
 
   isInputValid(){
     
    if(this.termin.ucionica_id != '0'){
      if(this.termin.tecaj_id != '0'){
        if(this.termin.pocetniDatum > Date.now() && this.termin.zavrsniDatum > Date.now()){
          if(this.termin.pocetniDatum <= this.termin.zavrsniDatum){
            return true;
          }
          else {
            this.swal.err("Greška s datumima!");
          }
        }
        else {
          this.swal.err("Greška s datumima!");
        }
      }
      else {
        this.swal.err("Odaberite tečaj!");
      }
    }
    else {
      this.swal.err("Odaberite učionicu!");
    }
   }

}
