import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SwalService } from 'src/app/services/swal.service';

@Component({
  selector: 'app-tipovi-nastave-list',
  templateUrl: './tipovi-nastave-list.component.html',
  styleUrls: ['./tipovi-nastave-list.component.scss']
})
export class TipoviNastaveListComponent implements OnInit {
  @Input() loggedUserPrivileges;
  
  tipoviNastave: any[] = [];

  mode: any = '';
  object: any = {};

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) { }

  ngOnInit(): void {
    this.swal.showLoading("Učitavanje...", false);
    this.http.getAll('tipovi-nastave')
      .subscribe(data => {
        this.swal.hideLoading();
        this.tipoviNastave = data;
      },
      err => {
        this.swal.hideLoading();
      });
  }

  
  changeMode(md, rn){
    this.object = rn ? this.copy(rn) : {};
    this.mode = md;
  }

  copy(o){
    return JSON.parse(JSON.stringify(o));
  }

  
  validateInput(){
    if(this.object.naziv){
      return true;
    }
    return false;
  }

    

  spremi(){
    if(this.validateInput()){
      if(this.mode == 'Add'){
        this.swal.showLoading("Spremanje tipa nastave!");
         this.http.post('tipovi-nastave', this.object)
          .subscribe(data => {
            this.swal.hideLoading();
            this.swal.ok("Tip nastave uspješno spremljen!");
              this.tipoviNastave.push(data);
          },
          err => {
            this.swal.hideLoading();
            this.swal.err(err.error);
          });
      }
      else if(this.mode == 'Update'){
        this.swal.showLoading("Spremanje izmjena!");
        this.http.patch('tipovi-nastave', this.object, this.object.id)
          .subscribe(data => {
            this.swal.hideLoading();
            this.swal.ok("Uspješno spremljeno!");
            let ucionica = this.tipoviNastave.find(u => u.id == this.object.id);
            if(ucionica){
              ucionica.naziv = this.object.naziv;
              ucionica.opis = this.object.opis;
              ucionica.id = this.object.id;
            }
          },
          err => {
            this.swal.hideLoading();
            this.swal.err(err.error);
          });
      }
    }
  } 

  brisi(id){
      this.swal.confirmDelete(
        () => {
          this.swal.showLoading("Brisanje...");
          this.http.delete('tipovi-nastave', id)
            .subscribe(data => {
              this.swal.hideLoading();
              this.swal.ok("Uspješno brisanje!");
              this.tipoviNastave = this.tipoviNastave.filter(u => u.id != id);
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
