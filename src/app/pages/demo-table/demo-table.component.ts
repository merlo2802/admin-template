import { Component, OnInit } from '@angular/core';
import { ClicComponent } from 'src/app/core/utils/clic-component';
import { NotifierService } from 'angular-notifier';
import { Page } from 'src/app/core/utils/paginator/page';
import { CustomOptions } from 'src/app/core/dto/custom-options';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss']
})
export class DemoTableComponent extends ClicComponent implements OnInit {
  public list: any[];
  constructor(
    private notifier: NotifierService,
  ) {
    super();
   }

  ngOnInit(): void {
  }
  crear(){

  }
  edit(row){
    console.log(row);
  }

  onUserFilter(filterValue: string) {
    filterValue = filterValue.toLowerCase();
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
