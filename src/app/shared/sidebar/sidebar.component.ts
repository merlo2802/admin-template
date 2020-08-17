import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];    
  constructor(
    private sidebarService: SidebarService,
    public router:Router,
  ) { 
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {
  }
  routes(ruta) {
    this.router.navigate(['/dashboards/principal']);

  }

}
