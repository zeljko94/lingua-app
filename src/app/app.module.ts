import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminDashboardComponent } from './layouts/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/shared/login/login.component';
import { UserDashboardComponent } from './layouts/user/user-dashboard/user-dashboard.component';
import { PredavacDashboardComponent } from './layouts/predavac/predavac-dashboard/predavac-dashboard.component';
import { PredavaciListComponent } from './components/predavaci-list/predavaci-list.component';
import { AdminPredavaciComponent } from './layouts/admin/admin-predavaci/admin-predavaci.component';
import { AddPredavacComponent } from './components/add-predavac/add-predavac.component';
import { AdminAddPredavacComponent } from './layouts/admin/admin-add-predavac/admin-add-predavac.component';
import { AdminUceniciComponent } from './layouts/admin/admin-ucenici/admin-ucenici.component';
import { UceniciListComponent } from './components/ucenici-list/ucenici-list.component';
import { UcioniceListComponent } from './components/ucionice-list/ucionice-list.component';
import { AdminUcioniceComponent } from './layouts/admin/admin-ucionice/admin-ucionice.component';
import { AdminTipoviNastaveComponent } from './layouts/admin/admin-tipovi-nastave/admin-tipovi-nastave.component';
import { TipoviNastaveListComponent } from './components/tipovi-nastave-list/tipovi-nastave-list.component';
import { RazineNastaveListComponent } from './components/razine-nastave-list/razine-nastave-list.component';
import { AdminRazineNastaveComponent } from './layouts/admin/admin-razine-nastave/admin-razine-nastave.component';
import { AdminCertifikatiComponent } from './layouts/admin/admin-certifikati/admin-certifikati.component';
import { AdminAddUcenikComponent } from './layouts/admin/admin-add-ucenik/admin-add-ucenik.component';
import { AddUcenikComponent } from './components/add-ucenik/add-ucenik.component';
import { SkillSelectComponent } from './components/skill-select/skill-select.component';
import { CommonModule } from '@angular/common';
import { AdminTecajeviComponent } from './layouts/admin/admin-tecajevi/admin-tecajevi.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { AdminVjestineComponent } from './layouts/admin/admin-vjestine/admin-vjestine.component';
import { VjestineListComponent } from './components/vjestine-list/vjestine-list.component';
import { AdminForumComponent } from './layouts/admin/admin-forum/admin-forum.component';
import { AdminAddForumComponent } from './layouts/admin/admin-add-forum/admin-add-forum.component';
import { AdminForumDetailsComponent } from './layouts/admin/admin-forum-details/admin-forum-details.component';
import { UcenikForumComponent } from './layouts/user/ucenik-forum/ucenik-forum.component';
import { ForumDetailsComponent } from './layouts/user/forum-details/forum-details.component';
import { UcenikTecajeviComponent } from './layouts/user/ucenik-tecajevi/ucenik-tecajevi.component';
import { UcenikTecajDetailsComponent } from './layouts/user/ucenik-tecaj-details/ucenik-tecaj-details.component';
import { UcenikCertifikatiComponent } from './layouts/user/ucenik-certifikati/ucenik-certifikati.component';
import { UcenikTestoviComponent } from './layouts/user/ucenik-testovi/ucenik-testovi.component';
import { PredavacUceniciComponent } from './layouts/predavac/predavac-ucenici/predavac-ucenici.component';
import { PredavacAddUcenikComponent } from './layouts/predavac/predavac-add-ucenik/predavac-add-ucenik.component';
import { PredavacTestoviComponent } from './layouts/predavac/predavac-testovi/predavac-testovi.component';
import { PredavacCertifikatiComponent } from './layouts/predavac/predavac-certifikati/predavac-certifikati.component';
import { PredavacUcenikDetailsComponent } from './layouts/predavac/predavac-ucenik-details/predavac-ucenik-details.component';
import { UcenikDetailsComponent } from './components/ucenik-details/ucenik-details.component';
import { PredavacForumiComponent } from './layouts/predavac/predavac-forumi/predavac-forumi.component';
import { PredavacAddForumComponent } from './layouts/predavac/predavac-add-forum/predavac-add-forum.component';
import { PredavacForumDetailsComponent } from './layouts/predavac/predavac-forum-details/predavac-forum-details.component';
import { PredavacTecajeviComponent } from './layouts/predavac/predavac-tecajevi/predavac-tecajevi.component';
import { PredavacTecajeviDetailsComponent } from './layouts/predavac/predavac-tecajevi-details/predavac-tecajevi-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminCalendarComponent } from './layouts/admin/admin-calendar/admin-calendar.component';
import { UnosTerminaComponent } from './components/unos-termina/unos-termina.component';
import { UnosTerminaModalComponent } from './components/unos-termina-modal/unos-termina-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainLayoutComponent,
    AdminDashboardComponent,
    LoginComponent,
    UserDashboardComponent,
    PredavacDashboardComponent,
    PredavaciListComponent,
    AdminPredavaciComponent,
    AddPredavacComponent,
    AdminAddPredavacComponent,
    AdminUceniciComponent,
    UceniciListComponent,
    UcioniceListComponent,
    AdminUcioniceComponent,
    AdminTipoviNastaveComponent,
    TipoviNastaveListComponent,
    RazineNastaveListComponent,
    AdminRazineNastaveComponent,
    AdminCertifikatiComponent,
    AdminAddUcenikComponent,
    AddUcenikComponent,
    SkillSelectComponent,
    AdminTecajeviComponent,
    AdminVjestineComponent,
    VjestineListComponent,
    AdminForumComponent,
    AdminAddForumComponent,
    AdminForumDetailsComponent,
    UcenikForumComponent,
    ForumDetailsComponent,
    UcenikTecajeviComponent,
    UcenikTecajDetailsComponent,
    UcenikCertifikatiComponent,
    UcenikTestoviComponent,
    PredavacUceniciComponent,
    PredavacAddUcenikComponent,
    PredavacTestoviComponent,
    PredavacCertifikatiComponent,
    PredavacUcenikDetailsComponent,
    UcenikDetailsComponent,
    PredavacForumiComponent,
    PredavacAddForumComponent,
    PredavacForumDetailsComponent,
    PredavacTecajeviComponent,
    PredavacTecajeviDetailsComponent,
    UserProfileComponent,
    AdminCalendarComponent,
    UnosTerminaComponent,
    UnosTerminaModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,        
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ColorPickerModule,
    AngularDualListBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
