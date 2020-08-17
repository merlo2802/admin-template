import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[]=[
    {
      titulo: 'Dashboard',
      icono: 'admin_panel_settings',
      submenu: [
        {titulo: 'Main', url: '/dashboard/' },
        {titulo: 'ProgressBar', url: 'progress' },
        {titulo: 'Graficas', url: 'graficas1' },

      ]
    },
    {
      titulo: 'Administracion',
      icono: 'shopping_bag',
      submenu: [
        {titulo: 'Rubros', url: 'rubro' },
      ]
    },
  ]

  constructor() { }
}
