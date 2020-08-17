import { Component, OnInit, Inject, Input, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClicComponent } from 'src/app/core/utils/clic-component';

@Component({
  selector: 'app-dialogo-crear-editar-rubro',
  templateUrl: './dialogo-crear-editar-rubro.component.html',
  // providers: [ 
  //   ParametricaService,
  //   SensibilizacionService
  // ]
})
export class DialogoCrearEditarRubroComponent implements OnInit {
  @Input() operacion: string;
  public form: FormGroup;
  selected: any = null;
  public flex: number ;
  tittleCloneEscenario: string;

  constructor(
    private dialogRef: MatDialogRef<DialogoCrearEditarRubroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
   }

  ngOnInit() {
    // this.listarGestiones();
    this.initilizeForm(this.data);
  }
  initilizeForm(data: any) {
    this.form = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(5), Validators.minLength(1)])),
      descripcion: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])),
      gestion: new FormControl(null),
      tipoAccion: new FormControl(null),
    });
  }
  cancel() {
    this.dialogRef.close();
  }
  // listarGestiones() {
  //   this.serviceParametrica.requestGestionList().subscribe(respuesta => {
  //     this.listaGestiones = respuesta.body;
  //     this.selected= this.listaGestiones[0].id;
  //   });
  // }
  // initilizeForm(data: EscenarioDto) {
  //   this.form = new FormGroup({
  //     id: new FormControl(null),
  //     nombre: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(5), Validators.minLength(1)])),
  //     descripcion: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])),
  //     gestion: new FormControl(null),
  //     tipoAccion: new FormControl(null),
  //   });
  // }
  
  save() {
    console.log(this.form.value,"form");
    // this.serviceParametrica.requestEscenarioStore(this.form.value).subscribe(respuesta => {
    //   this.blockUI.start('Procesando solicitud...');
    //   if (respuesta !== null) {
    //     this.dialogRef.close({ respuesta });
    //     this.notifierCustom('', `Escenario Convertido satisfactoriamente`, 'success');
    //     this.blockUI.stop();
    //   }
    // }, error => {
    //   this.notifierError(error);
    //   this.blockUI.stop();
    // });
  }
  // dataForm() {
  //   this.form.value.gestion = this.listaGestiones.find(item => item.id === this.selected);
  //   this.form.value.tipoAccion = this.operacion;
  //   this.form.value.id = this.data.id;
  //   this.form.value.nombre = (this.form.get('nombre').value).toUpperCase()
  //   this.form.value.descripcion = (this.form.get('descripcion').value).toUpperCase()
  // }
  // notifierCustom(title: string, message: string, type: string) {
  //   const customOptions: CustomOptions = {type, tile: title, message, template: this.customNotificationTmpl};
  //   this.notifier.show(customOptions);
  // }
  // notifierError(error: any, type?: string) {
  //   if (error && error.error) {
  //     // tslint:disable-next-line:max-line-length
  //     const customOptions: CustomOptions = {type: type ? type : 'error', tile: error.error.title, message: error.error.detail, template: this.customNotificationTmpl};
  //     this.notifier.show(customOptions);
  //   }
  // }
  
}
