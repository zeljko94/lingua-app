import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SanitizerService } from 'src/app/services/sanitizer.service';
import { SwalService } from 'src/app/services/swal.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-ucenik-details',
  templateUrl: './ucenik-details.component.html',
  styleUrls: ['./ucenik-details.component.scss']
})
export class UcenikDetailsComponent implements OnInit {
  @Input() role = '';
  @Input() id = 0;
  @ViewChild('usrImgInput') usrImgInput;
  @ViewChild('usrDocInput') usrDocInput;
  @ViewChild('skillSelect') skillSelect;
  @ViewChild('pocetak') datumRodj = new Date();
  
  private sub: any;

  p: any = {
    name: "asd",
    lastname: "asd",
    email: "user@gmail.com",
    password: "asd123",
    RFID: "1231231231",
    rePassword: "asd123",
    adresa: "asdasd",
    telefon: "asdsdda",
    edukacija: "FPMOZ",
    about: "asdsadsadasjdsakldjsadkjsalk",
    dodatno: "asdsakldjsalkdjlkdjqlkwjdwljidwi",
    titula: "asd",
    role: "user", 
    vjestine: "",
    spol: "M",
  };
  
  ProfileImageFile: any;
  PersonalDocs: any[] = [];
  skillstring: any = '';

  // DATA VALIDATAION
  IsUsernameTaken: any = false;
  IsEmailTaken:    any = false;
  IsRFIDCardTaken:     any = false;
  IsRFIDPrivjesakTaken:     any = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private swal: SwalService,
    private http: HttpService,
    private sanitizer: SanitizerService
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if(this.id){
        this.http.get('users', this.id)
          .subscribe(
            data => {
              this.p = data;
            },
            err => {

            }
          );
      }
    });
  }



  toLocalDateTime(d){
    d = moment(d.toString()).toDate();
    var offset = new Date().getTimezoneOffset();
    var local = new Date(d.setMinutes(d.getMinutes()-offset));
    return local;
  }

  getJSON() {
    return JSON.stringify(this.p);
  }

  spremi(){
    //if(this.validateInput()){
      
    var copy = JSON.parse(JSON.stringify(this.p));
    //copy.vjestine = "1,2,3,4";
    delete copy["ProfileImage"];
    delete copy["PersonalDocuments"];
    //copy.DatumRodjenja = this.toLocalDateTime(copy.DatumRodjenja).toJSON();
    //copy.Skills = copy.Skills.map(s => s.ID).toString();
    //copy.ProfileImageDataUrl = "";

    this.swal.showLoading("Spremanje podataka o predavaču...", false);
    this.http.patch('users', copy, copy.id)
      .subscribe(data => {
        this.swal.hideLoading();
        this.swal.ok("Uspješno spremljeno!");
      },
      err => {
        this.swal.hideLoading();
        this.swal.err(err.error);
      });
    /*
    this.predavaciService.insert(copy)
      .subscribe(
        data => {
          this.swal.hideLoading();
          if(data.StatusCode > 0){

            var UserID = data.Data.ID;
            
            this.notificationService.notifyPredavacInsert(UserID, this.auth.getID())
              .subscribe(data => {});

            if(this.ProfileImageFile){
              this.swal.showLoading("Spremanje profilne slike...", false);
              this.profileImageService.insert(UserID, this.ProfileImageFile)
                .subscribe(data => {
                  this.swal.hideLoading();
                  if(data.StatusCode > 0){
                    if(this.hasFiles(this.PersonalDocs.map(pd => pd.File))){
                      this.personalDocumentService.insert(UserID, this.PersonalDocs.map(pd => pd.File))
                        .subscribe(data => {
                          this.swal.hideLoading();
                          if(data.StatusCode > 0){

                              
                            this.swal.ok("Predavač uspješno spremljen!");
                            setTimeout(() => {
                              this.router.navigate(['/admin/predavaci']);
                            }, 1500);
                          }
                        },
                      err => {
                        this.swal.hideLoading();
                      });
                    }
                  }
                },
              err => {
                this.swal.hideLoading();
              });
            }
          }
        }, 
        err => {
          this.swal.hideLoading();
        }
      );
      */
    //}
  }



numbersOnlyInput(e) {
const pattern = /[0-9]/;

let inputChar = String.fromCharCode(e.charCode);
if (e.keyCode != 8 && !pattern.test(inputChar)) {
  e.preventDefault();
}
}

numbersOnlyKeyUp(e){
if(e.target.value.length > 9){
  e.target.select();

  if(e.target.name == "RFIDCard"){
    this.http.get("User/IsRFIDCardTaken", {RFID: this.p.RFIDCard})
      .subscribe(data => {
        this.IsRFIDCardTaken = data;
      });
  }
  else if(e.target.name == "RFIDPrivjesak"){
    this.http.get("User/IsRFIDPrivjesakTaken", {RFID: this.p.RFIDPrivjesak})
      .subscribe(data => {
        this.IsRFIDPrivjesakTaken = data;
      });
  }
}
else{
  if(e.target.name == "RFIDCard")
    this.IsRFIDCardTaken = false;
  else if (e.target.name == "RFIDPrivjesak")
    this.IsRFIDPrivjesakTaken = false;
}
}

numbersOnlyInputFocus(e){
if(e.target.value.length > 9){
  e.target.select();
}
}

subArray(arr, chunkSize){
var i,j,temparray,chunk = chunkSize;
var rez = [];
for (i=0,j=arr.length; i<j; i+=chunk) {
    temparray = arr.slice(i,i+chunk);
    rez.push(temparray);
}
return rez;
}

reset(){
this.p = {spol: "M", role: "predavac", Skills: []};
this.sanitizer.usrProfileImg(this.p);
this.PersonalDocs = [];
}

validateInput(){
if(this.p.RFIDCard){
  if(this.p.RFIDPrivjesak){
    if(this.p.Name){
      if(this.p.LastName){
        if(this.p.Username){
          if(!this.IsUsernameTaken){
            if(this.p.email){
              if(this.isValidEmail()){
                if(!this.IsEmailTaken){
                  if(this.p.Password){
                    if(this.p.RePassword){
                      if(this.p.Adresa){
                        if(this.p.DatumRodjenja){
                          if(this.p.MjestoRodjenja){

                            // SUCCESS!
                            return true;
                          }
                          else{
                            this.swal.err("Unesite mjesto rođenja!");
                          }
                        }
                        else{
                          this.swal.err("Unesite datum rođenja!");
                        }
                      }
                      else{
                        this.swal.err("Unesite adresu!");
                      }
                    }
                    else{
                      this.swal.err("Ponovite lozinku!");
                    }
                  }
                  else{
                    this.swal.err("Unesite lozinku!");
                  }
                }
                else{
                  this.swal.err("E-mail je zauzet!");
                }
              }
              else{
                this.swal.err("Unesena e-mail adresa nije validna!");
              }
            }
            else{
              this.swal.err("Unesite e-mail!");
            }
          }
          else{
            this.swal.err("Korisničko ime je zauzeto!");
          }
        }
        else{
          this.swal.err("Unesite korisničko ime!");
        }
      }
      else{
        this.swal.err("Unesite prezime!");
      }
    }
    else{
      this.swal.err("Unesite ime!");
    }
  }
  else{
    this.swal.err("Unesite RFID  privjeska!");
  }
}
else{
  this.swal.err("Unesite RFID kartice!");
}
return false;
}

isValidEmail(){

if(this.p.email){
  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return this.p.email.match(email_regex) != null;
}

}

emailChange(){
this.http.post("users/IsEmailTaken", {email: this.p.email}).subscribe(data => {
  this.IsEmailTaken = data;
});
}


hasFiles(files){
for(var i=0; i<files.length; i++){
  if(files[i] != null)
    return true;
}
return false;
}


userImgChange(){
var file = this.usrImgInput.nativeElement.files[0];
var fileName = file.name;

if(file){
  this.ProfileImageFile = file;
  var reader = new FileReader();

  reader.onload = (e: any) => {
    this.p.ProfileImage.DataUrl = e.target.result;
  }
  reader.readAsDataURL(file);
}
}

personalDocAdd(){
var files = this.usrDocInput.nativeElement.files;
for(var i=0; i<files.length; i++){
  this.PersonalDocs.push({FileName: files[i].name, File: files[i]});
}
}

removeDoc(doc){
this.PersonalDocs = this.PersonalDocs.filter(pd => pd != doc);
}


}
