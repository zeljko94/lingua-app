import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AdminDashboardComponent } from './layouts/admin/admin-dashboard/admin-dashboard.component';
import { PredavacDashboardComponent } from './layouts/predavac/predavac-dashboard/predavac-dashboard.component';
import { UserDashboardComponent } from './layouts/user/user-dashboard/user-dashboard.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { PredavacAuthGuard } from './guards/predavac-auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { AdminPredavaciComponent } from './layouts/admin/admin-predavaci/admin-predavaci.component';
import { AdminAddPredavacComponent } from './layouts/admin/admin-add-predavac/admin-add-predavac.component';
import { AdminUceniciComponent } from './layouts/admin/admin-ucenici/admin-ucenici.component';
import { AdminUcioniceComponent } from './layouts/admin/admin-ucionice/admin-ucionice.component';
import { AdminTipoviNastaveComponent } from './layouts/admin/admin-tipovi-nastave/admin-tipovi-nastave.component';
import { AdminRazineNastaveComponent } from './layouts/admin/admin-razine-nastave/admin-razine-nastave.component';
import { AdminCertifikatiComponent } from './layouts/admin/admin-certifikati/admin-certifikati.component';
import { AdminAddUcenikComponent } from './layouts/admin/admin-add-ucenik/admin-add-ucenik.component';
import { AdminTecajeviComponent } from './layouts/admin/admin-tecajevi/admin-tecajevi.component';
import { AdminVjestineComponent } from './layouts/admin/admin-vjestine/admin-vjestine.component';
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
import { PredavacCertifikatiComponent } from './layouts/predavac/predavac-certifikati/predavac-certifikati.component';
import { PredavacTestoviComponent } from './layouts/predavac/predavac-testovi/predavac-testovi.component';
import { PredavacUcenikDetailsComponent } from './layouts/predavac/predavac-ucenik-details/predavac-ucenik-details.component';
import { PredavacForumiComponent } from './layouts/predavac/predavac-forumi/predavac-forumi.component';
import { PredavacAddForumComponent } from './layouts/predavac/predavac-add-forum/predavac-add-forum.component';
import { PredavacForumDetailsComponent } from './layouts/predavac/predavac-forum-details/predavac-forum-details.component';
import { PredavacTecajeviComponent } from './layouts/predavac/predavac-tecajevi/predavac-tecajevi.component';
import { PredavacTecajeviDetailsComponent } from './layouts/predavac/predavac-tecajevi-details/predavac-tecajevi-details.component';
import { AdminCalendarComponent } from './layouts/admin/admin-calendar/admin-calendar.component';


const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: AdminDashboardComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/kalendar', component: AdminCalendarComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/forum', component: AdminForumComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/add-forum', component: AdminAddForumComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/forum-details/:id', component: AdminForumDetailsComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/tecajevi', component: AdminTecajeviComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/certifikati', component: AdminCertifikatiComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/ucionice', component: AdminUcioniceComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/tipovi-nastave', component: AdminTipoviNastaveComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/razine-nastave', component: AdminRazineNastaveComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/vjestine', component: AdminVjestineComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/ucenici', component: AdminUceniciComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/add-ucenik', component: AdminAddUcenikComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/predavaci', component: AdminPredavaciComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/add-predavac', component: AdminAddPredavacComponent, canActivate: [AdminAuthGuard] },


      { path: 'user/dashboard', component: UserDashboardComponent, canActivate: [UserAuthGuard] },
      { path: 'user/forum', component: UcenikForumComponent, canActivate: [UserAuthGuard] },
      { path: 'user/certifikati', component: UcenikCertifikatiComponent, canActivate: [UserAuthGuard] },
      { path: 'user/testovi', component: UcenikTestoviComponent, canActivate: [UserAuthGuard] },
      { path: 'user/forum-details/:id', component: ForumDetailsComponent, canActivate: [UserAuthGuard] },
      { path: 'user/tecajevi', component: UcenikTecajeviComponent, canActivate: [UserAuthGuard] },
      { path: 'user/tecaj-details/:id', component: UcenikTecajDetailsComponent, canActivate: [UserAuthGuard] },

      { path: 'predavac/dashboard', component: PredavacDashboardComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/certifikati', component: PredavacCertifikatiComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/testovi', component: PredavacTestoviComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/forum', component: PredavacForumiComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/add-forum', component: PredavacAddForumComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/forum-details/:id', component: PredavacForumDetailsComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/ucenici', component: PredavacUceniciComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/add-ucenik', component: PredavacAddUcenikComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/ucenik-details/:id', component: PredavacUcenikDetailsComponent, canActivate: [PredavacAuthGuard] },
      { path: 'predavac/tecajevi', component: PredavacTecajeviComponent, canActivate: [PredavacAuthGuard] },
      //{ path: 'predavac/tecaj-details/:id', component: PredavacTecajeviDetailsComponent, canActivate: [PredavacAuthGuard] },

    ]
  },

  { path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard] },
  //{ path: 'signup', component: SignupComponent, canActivate: [LoginPageGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
