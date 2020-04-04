import { Component, OnInit, Input } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-razine-nastave-list',
  templateUrl: './razine-nastave-list.component.html',
  styleUrls: ['./razine-nastave-list.component.scss']
})
export class RazineNastaveListComponent implements OnInit {
  @Input() loggedUserPrivileges;
  search = "";

  razineNastave: any[] = [];

  mode: any = '';
  object: any = {};

  constructor(
    private swal: SwalService,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.swal.showLoading("Učitavanje", false);
    this.http.getAll('razine-nastave')
      .subscribe(data => {
        this.swal.hideLoading();
        this.razineNastave = data;
      },
      err => {
        this.swal.hideLoading();
      });
  }

    

  copy(o){
    return JSON.parse(JSON.stringify(o));
  }

  changeMode(md, rn){
    this.object = rn ? this.copy(rn) : {};
    this.mode = md;
  }


  validateInput(){
    if(this.object.naziv){
      return true;
    }
    return false;
  }

  applyFilters() {

  }

  spremi(){
    if(this.validateInput()){
      if(this.mode == 'Add'){
        this.swal.showLoading("Spremanje razine nastave!");
         this.http.post('razine-nastave', this.object)
          .subscribe(data => {
            this.swal.hideLoading();
            this.swal.ok("Razina nastave uspješno spremljena!");
              this.razineNastave.push(data);
          },
          err => {
            this.swal.hideLoading();
            this.swal.err(err.error);
          });
      }
      else if(this.mode == 'Update'){
        this.swal.showLoading("Spremanje izmjena!");
        this.http.patch('razine-nastave', this.object, this.object.id)
          .subscribe(data => {
            this.swal.hideLoading();
            this.swal.ok("Uspješno spremljeno!");
            let ucionica = this.razineNastave.find(u => u.id == this.object.id);
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
        this.http.delete('razine-nastave', id)
          .subscribe(data => {
            this.swal.hideLoading();
            this.swal.ok("Uspješno brisanje!");
            this.razineNastave = this.razineNastave.filter(u => u.id != id);
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
