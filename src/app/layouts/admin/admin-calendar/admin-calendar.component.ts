import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { SwalService } from 'src/app/services/swal.service';

import * as $ from 'jquery';
import * as moment from 'moment';
import "fullcalendar";

@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.scss']
})
export class AdminCalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('unosTerminaComponent') unosTerminaComponent;
  events: any[] = [];

  tipoviNastave: any[] = [];
  razine: any[] = [];
  predavaci: any[] = [];
  ucionice: any[] = [];
  predmeti: any[] = [];
  skills: any[] = [];

  ucionica: any;
  predmet: any;

  value: Date;

  pocDat: Date = new Date();
  zavDat: Date = new Date();
  errors: string;

  p: any;
  z: any;

  showModal: boolean = false;

  constructor(
    public auth: AuthService,
    private http: HttpService,
    private swal: SwalService,
  ) { }

  renderEvents(){
    for(var i=0; i<this.events.length; i++){
      (<any>$('#myCal')).fullCalendar("renderEvent", this.events[i], true);
    }
  }

  ngAfterViewInit(){
    
    this.unosTerminaComponent.addEmitter.subscribe(data => {
      this.events.push({
        title: data.title,
        start: data.pocetniDatum,
        end: data.zavrsniDatum
      });
      (<any>$('#myCal')).fullCalendar('removeEvents');
      (<any>$('#myCal')).fullCalendar('addEventSource', this.events);
      (<any>$('#myCal')).fullCalendar('refetchEvents');
    });

    let self = this;
    this.swal.showLoading("Učitavanje podataka...", false);
    this.http.getAll('termini') // < --------------------------
      .subscribe(data => {
        this.swal.hideLoading();
        this.events = [];
        for(var i=0; i< data.length; i++){
          this.events.push({
            title: data[i].title,
            start: data[i].pocetniDatum,
            end: data[i].zavrsniDatum
          });
        }
        
        (<any>$('#myCal')).fullCalendar({
          locale: 'hr',
          editable:  true,
          eventLimit: false,
          displayEventTime: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaDay'//'month,agendaWeek,agendaDay,listMonth'
          },
          eventRender: function(event, element, view){
            element.find('.fc-title').html(event.title);
          },
          eventAfterRender: function(event, element, view){
            element.find('.fc-title').html(event.title);
          },
          eventDrop: function(event, delta, revertFunc) {
            if(event.start < new Date()){
              revertFunc();
              return;
            }

            self.swal.confirmUpdate(
              () => {
              },
              () => {
                revertFunc();
              }
            );
          },
          eventDragStop: function(event, jsEvent){
            var trashEl = jQuery('#brisiEventContainer');
            var ofs = trashEl.offset();
            if(!ofs)
              return;
        
            var x1 = ofs.left;
            var x2 = ofs.left + trashEl.outerWidth(true);
            var y1 = ofs.top;
            var y2 = ofs.top + trashEl.outerHeight(true);
        
            if (jsEvent.pageX >= x1 && jsEvent.pageX<= x2 &&
                jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
                  self.swal.confirmDelete(
                    () => {

                      self.http.delete('termini', event.id)
                        .subscribe(data => {
                          self.events = self.events.filter(e => e.id != event.id);
                          (<any> $('#myCal')).fullCalendar('removeEvents', event._id);
                        },
                        err => {

                        });
                    },
                    () => {}
                  );
            }
          }
        });

        (<any> $('#myCal')).fullCalendar("addEventSource", this.events);
        (<any>$('#myCal')).fullCalendar('refetchEvents');
      });

  }

  ngOnInit() {

      
      this.http.getAll('users/predavaci')
        .subscribe(data => {
          this.predavaci = data;
      },
      err => {

      });

      this.http.getAll('razine-nastave')
      .subscribe(data => {
        this.razine = data;
      },
      err => {

      });
      
      this.http.getAll('tipovi-nastave')
        .subscribe(data => {
          this.tipoviNastave = data;
      },
      err => {
        
      });


      this.http.getAll('vjestine')
        .subscribe(data => {
          this.skills = data;
        },
        err => {
          
        });

      this.http.getAll('ucionice')
        .subscribe(data => {
          this.ucionice = data;
          this.ucionica = data.length > 0 ? data[0] : null;
        },
        err => {
          
        });

      this.http.getAll('tecajevi')
        .subscribe(data => {
          if(this.auth.isPredavac())
            data = data.filter(d => d.predavac.id == this.auth.getUser().id);

            this.predmeti = data;
            this.predmet =  data.length > 0 ? data[0] : null;
        },
        err => {
          
        });
  }

  pad(n){return n<10 ? '0'+n : n}

  formatDateTime(date){
    return this.pad(date.getDate()) + "-" + this.pad(date.getMonth()+1) + "-" + date.getFullYear() + " " + this.pad(date.getHours()) + ":" + this.pad(date.getMinutes()) + ":" + this.pad(date.getSeconds());
  }


  updateEvent(e){
    this.http.patch('termini', e, e.id)
      .subscribe(data => {
        
      },
      err => {
        
      });
  }


}
