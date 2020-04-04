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
    this.http.getAll('ucionice')
       .subscribe(data => {
         this.ucionice = data;
       },
       err => {

       });
       
    this.http.getAll('tecajevi')
       .subscribe(data => {
           this.tecajevi = data.Data;
           if(this.auth.getPrivileges() == 'predavac'){
             this.tecajevi = this.tecajevi.filter(t => t.predavac.id == this.auth.getUser().id);
           }
       });
     this.termin.NastavaID = this.nastava ? 0 : this.nastavaID;
     this.termin.UcionicaID = '0';
   }
 
   addTermin(){
     let termin = {
       pocetniDatum: moment(new Date().toString()).format('YYYY-MM-DD HH:mm:ss'),
       zavrsniDatum: moment(new Date().toString()).format('YYYY-MM-DD HH:mm:ss'),
       title: 'Naslov eventa',
       user_id: 1,
       ucionica_id: 1,
       tecaj_id: 1
     };
     console.log(termin);

     this.http.post('termini', termin)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
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
 
   isInputValid(swal = true){/*
     if(this.termin.UcionicaID != '0'){
       if(this.termin.PocetniDatum > Date.now() && this.termin.ZavrsniDatum > Date.now()){
         if(this.termin.PocetniDatum <= this.termin.ZavrsniDatum){
 
           // SUCCESS
           return true;
         }
         else{
           if(swal)
             this.swal.err("Greška sa datumima!");
           return false;
         }
       }
       else{
         if(swal)
           this.swal.err("Greška sa datumima!");
       }
     }
     else{
       if(swal)
         this.swal.err("Odaberite učionicu!");
       return false;
     }*/
   }

}
