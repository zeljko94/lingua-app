import { Component, OnInit, Input } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ucionice-list',
  templateUrl: './ucionice-list.component.html',
  styleUrls: ['./ucionice-list.component.scss']
})
export class UcioniceListComponent implements OnInit {
  @Input() loggedUserPrivileges;
  
  ucionice: any[] = [];

  mode: any = '';
  object: any = {};

  constructor(
    private swal: SwalService,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.swal.showLoading("Učitavanje...", false);
    this.http.getAll('ucionice')
      .subscribe(data => {
        this.ucionice = data;
        this.swal.hideLoading();
      },
      err => {
        this.swal.hideLoading();
      });
  }

   
  validateInput(){
    if(this.object.naziv){
      return true;
      /*if(this.object.opis){
        if(this.object.color){
          return true;
        }
      }
      return false;*/
    }
    return false;
  }

  toClipboard(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.swal.ok("Uspješno kopirano!");
  }
  

  spremi(){
    if(this.validateInput()){
      if(this.mode == 'Add'){
        this.swal.showLoading("Spremanje učionice!");
         this.http.post('ucionice', this.object)
          .subscribe(data => {
            this.swal.hideLoading();
            this.swal.ok("Učionica uspješno spremljena!");
              this.ucionice.push(data);
          },
          err => {
            this.swal.hideLoading();
            this.swal.err(err.error);
          });
      }
      else if(this.mode == 'Update'){
        this.swal.showLoading("Spremanje izmjena!");
        this.http.patch('ucionice', this.object, this.object.id)
          .subscribe(data => {
            this.swal.hideLoading();
            this.swal.ok("Uspješno spremljeno!");
            let ucionica = this.ucionice.find(u => u.id == this.object.id);
            if(ucionica){
              ucionica.naziv = this.object.naziv;
              ucionica.opis = this.object.opis;
              ucionica.color = this.object.color;
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
          this.http.delete('ucionice', id)
            .subscribe(data => {
              this.swal.hideLoading();
              this.swal.ok("Uspješno brisanje!");
              this.ucionice = this.ucionice.filter(u => u.id != id);
            },
            err => {
              this.swal.hideLoading();
              this.swal.err(err.error);
            });
        },
        () => {}
      );
  }

  
  copy(o){
    return JSON.parse(JSON.stringify(o));
  }

  changeMode(md, rn){
    this.object = rn ? this.copy(rn) : {};
    this.mode = md;
  }

}

