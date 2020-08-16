import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { ApisService } from '../services/apis.service';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/models.interface';
import { NgForm } from '@angular/forms';
// import { createHostListener } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  email: any = 'admin@gmail.com';
  password: any = '123456';
  logeado;
  constructor(
    private auth: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }
  login(form : NgForm) {
    if(form.invalid) {return;}
    this.auth.login(this.usuario).subscribe(resp => {
      console.log(resp);
    }, (err) => {
      console.log(err.error.error.message);
    })
  }
  loginGoogle() {
    this.auth.loginGoogleWeb().then(()=>{  
        this.logeado = true;
        console.log("inicio de sesion exitoso");
        this.router.navigate([''])
        
    });
  }
  // login() {
  //   if (!this.email || !this.password) {
  //     this.error('Todos los campos son obligatorios');
  //     return false;
  //   }
  //   this.spinner.show();
  //   this.authService.login(this.email, this.password).then((data) => {
  //     console.log(data);
  //     this.api.getProfile(data.uid).then((info: any) => {
  //       this.spinner.hide();
  //       console.log(info);
  //       if (info && info.type === 'admin') {
  //         this.success('Acceso Exitoso');
  //         localStorage.setItem('uid', data.uid);
  //         this.router.navigate(['']);
  //       }
  //       else {
  //         this.error('Acceso Denegado');
  //       }
  //     }, error => {
  //       this.spinner.hide();
  //       this.error(error);
  //     }).catch(error => {
  //       this.spinner.hide();
  //       console.log(error);
  //       this.error(error);
  //     });
  //   }, error => {
  //     this.spinner.hide();
  //     this.error(error);
  //   }).catch(error => {
  //     this.spinner.hide();
  //     console.log(error);
  //     this.error(error);
  //   });
  // }

  // error(message) {
  //   const toastOptions: ToastOptions = {
  //     title: "Error",
  //     msg: message,
  //     showClose: true,
  //     timeout: 2000,
  //     theme: 'default',
  //     onAdd: (toast: ToastData) => {
  //       console.log('Toast ' + toast.id + ' has been added!');
  //     },
  //     onRemove: function (toast: ToastData) {
  //       console.log('Toast ' + toast.id + ' has been removed!');
  //     }
  //   };
  //   this.toastyService.error(toastOptions);
  // }
  // success(message) {
  //   const toastOptions: ToastOptions = {
  //     title: 'exitoso',
  //     msg: message,
  //     showClose: true,
  //     timeout: 2000,
  //     theme: 'default',
  //     onAdd: (toast: ToastData) => {
  //       console.log('Toast ' + toast.id + ' ha sido añadido!');
  //     },
  //     onRemove: function (toast: ToastData) {
  //       console.log('Toast ' + toast.id + ' ha sido removido!');
  //     }
  //   };
  //   this.toastyService.success(toastOptions);
  // }

}
