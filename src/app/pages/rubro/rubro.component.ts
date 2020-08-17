import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { RubroModel } from 'src/app/models/rubro.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogoCrearEditarRubroComponent } from './dialogo-crear-editar-rubro/dialogo-crear-editar-rubro.component';
import { ClicComponent } from 'src/app/core/utils/clic-component';
import { Page } from 'src/app/core/utils/paginator/page';
import { NotifierService } from 'angular-notifier';
import { CustomOptions } from 'src/app/core/dto/custom-options';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrls: ['./rubro.component.scss']
})
export class RubroComponent extends ClicComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  rubro: RubroModel = new RubroModel();

  constructor(
    private pageService: PageService,
    public matDialog: MatDialog,
    private notifier: NotifierService
  ) { 
    super();
  }

  ngOnInit(): void {
  }

  guardar(form : NgForm) {
    if(form.invalid) {
      return;
    }
    this.pageService.GuardarRubro(this.rubro).subscribe(resp => {
      console.log(resp);
    })
  }

  abrirDialogo(){
    const temporal = ""
    const dialog = this.matDialog.open(DialogoCrearEditarRubroComponent, {
      width: '650px',
      minWidth: '650px',
      panelClass: ['zero-padding', 'scroll-x-hidden'],
      data: temporal
    });
  }


  notifierError(error: any, type?: string) {
    if (error && error.error) {
      const customOptions: CustomOptions = {type: type ? type : 'error', tile: error.error.title, message: error.error.detail, template: this.customNotificationTmpl};
      this.notifier.show(customOptions);
    }
  }

  public flex: number ;
  onGtLgScreen() {
    this.flex = 10;
    this.dialogWidth = '750px';
  }

  onLgScreen() {
    this.flex = 15;
    this.dialogWidth = '750px';
  }

  onMdScreen() {
    this.flex = 25;
    this.dialogWidth = '750px';
  }

  onSmScreen() {
    this.flex = 100;
    this.dialogWidth = '99%';
  }

  onXsScreen() {
    this.flex = 100;
    this.dialogWidth = '99%';
  }

  setPage(pageInfo: Page) {}

}
