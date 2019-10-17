import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email;
  public senha;

  constructor(private service: BackendService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('010101')) {
      this.router.navigate(['home'])
    } else {
      this.router.navigate([''])
    }
  }

  logar() {
    if (this.email && this.senha) {
      let data = {
        email: this.email,
        senha: this.senha
      }
      this.service.logar(data).subscribe(res => {
        if (res.json().status == 200) {
          if (res.json().count[0].count == 1) {
            let id = res.json().result[0].iduser
            localStorage.setItem('010101', id);
            this.router.navigate(['home'])
          } else {
            swal('Atenção', 'Email ou senha incorretos', 'warning')
          }
        } else {
          console.log(res.json().error);
        }
      })
    } else {
      swal('ERRO', 'Campos vazios', 'warning')
    }
  }
  sair() {
    localStorage.removeItem('010101')
    window.location.reload();

  }
}