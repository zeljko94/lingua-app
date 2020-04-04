import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ucenik-certifikati',
  templateUrl: './ucenik-certifikati.component.html',
  styleUrls: ['./ucenik-certifikati.component.scss']
})
export class UcenikCertifikatiComponent implements OnInit {

  searchAll: string = '';
  searchIzdani: string = '';

  certifikati: any[] = [
    {
      ID: 1,
      Naziv: "Cert 1", 
      Opis: "Cert 1 Opis",
      Skill: {
        Name: "Njemački jezik",
        Icon: "flag-icon flag-icon-de"
      },
      NastavaRazina: {
        Naziv: "A1.1"
      }
    },
  ];

  izdaniCertifikati: any[] = [
    {
      ID: 1,
      Naziv: "Cert 1",
      Skill: {
        Name: "Njemački jezik",
        Icon: "flag-icon flag-icon-de"
      },
      Polaznik: {
        Name: "Ivo",
        LastName: "Ivić"
      },
      NastavaRazina: {
        Naziv: "A1.1"
      },
      Datum: new Date(2018, 3, 23, 0, 0, 0)
    }
  ];

  
  constructor() { }

  ngOnInit() {
    
  }

  changeMode(x='Update',rn) {

  }

  pregled(id){
    
  }

  print(id){

  }

  download(id){

  }

  brisi(id){

  }

  pregledIzdani(id){
    
  }

  printIzdani(id){

  }

  downloadIzdani(id){

  }

  brisiIzdani(id){

  }

  izdaj(){

  }

  dodaj(){

  }

  applyFilters() {

  }
}
