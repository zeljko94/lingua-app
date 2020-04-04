import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  administrationItems: any[] = [];
  navigationItems: any[] = [];

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.initNav(this.auth.getPrivileges());
  }

  

  initNav(privileges){
    if(privileges == 'admin'){
      this.getAdminNavItems();
    }
    else if(privileges == 'predavac'){
      this.getPredavacNavItems();
    }
    else if(privileges == 'user'){
      this.getUcenikNavItems();
    }
  }

  getAdminNavItems(){
    this.navigationItems = [
      {
        text: "Nadzorna ploča",
        link: "/admin/dashboard",
        icon: "fa fa-dashboard",
        active: false
      },
      {
        text: "Kalendar",
        link: "/admin/kalendar",
        icon: "fa fa-calendar",
        active: false
      },
      {
        text: "Forum",
        link: "/admin/forum",
        icon: "fa fa-comments",
        active: false
      }
    ];

    this.administrationItems = [
      {
        text: "Predavači",
        link: "/admin/predavaci",
        icon: "fa fa-users",
        active: false,
      },
      {
        text: "Učenici",
        link: "/admin/ucenici",
        icon: "fa fa-graduation-cap",
        active: false,
      },
      {
        text: "Učionice",
        link: "/admin/ucionice",
        icon: "fa fa-home",
        active: false,
      },
      {
        text: "Tečaji/Instrukcije",
        link: "/admin/tecajevi",
        icon: "fa fa-language",
        active: false,
      },
      {
        text: "Tipovi nastave",
        link: "/admin/tipovi-nastave",
        icon: "	fa fa-gears",
        active: false,
      },
      {
        text: "Razine nastave",
        link: "/admin/razine-nastave",
        icon: "fa fa-line-chart",
        active: false,
      },
      {
        text: "Vještine",
        link: "/admin/vjestine",
        icon: "fa fa-book",
        active: false,
      },
      {
        text: "Online testovi",
        link: "/admin/testovi",
        icon: "fa fa-edit",
        active: false,
      },
      {
        text: "Certifikati",
        link: "/admin/certifikati",
        icon: "fa fa-id-card-o",
        active: false,
      },
    ];
  }

  getPredavacNavItems(){
    this.navigationItems = [
      {
        text: "Nadzorna ploča",
        link: "/predavac/dashboard",
        icon: "fa fa-dashboard",
        active: false
      },
      {
        text: "Kalendar",
        link: "/predavac/kalendar",
        icon: "fa fa-calendar",
        active: false
      },
      {
        text: "Forum",
        link: "/predavac/forum",
        icon: "fa fa-comments",
        active: false
      }
    ];

    this.administrationItems = [
      {
        text: "Učenici",
        link: "/predavac/ucenici",
        icon: "fa fa-graduation-cap",
        active: false,
      },
      {
        text: "Moji tečaji/Instrukcije",
        link: "/predavac/tecajevi",
        icon: "fa fa-language",
        active: false,
      },
      {
        text: "Online testovi",
        link: "/predavac/testovi",
        icon: "fa fa-edit",
        active: false,
      },
      {
        text: "Certifikati",
        link: "/predavac/certifikati",
        icon: "fa fa-newspaper-o",
        active: false,
      },
    ];
  }

  getUcenikNavItems(){
    this.navigationItems = [
      {
        text: "Nadzorna ploča",
        link: "/user/dashboard",
        icon: "fa fa-dashboard",
        active: false
      },
      {
        text: "Kalendar",
        link: "/user/calendar",
        icon: "fa fa-calendar",
        active: false
      },
      {
        text: "Forum",
        link: "/user/forum",
        icon: "fa fa-comments",
        active: false
      }
    ];

    this.administrationItems = [
      {
        text: "Moji tečaji/Instrukcije",
        link: "/user/tecajevi",
        icon: "fa fa-language",
        active: false,
      },
      {
        text: "Moji certifikati",
        link: "/user/certifikati",
        icon: "fa fa-newspaper-o",
        active: false,
      },
      {
        text: "Online testovi",
        link: "/user/testovi",
        icon: "fa fa-edit",
        active: false,
      }
    ];
  }

}
