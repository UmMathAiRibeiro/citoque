import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('010101')) {
      this.router.navigate(['projetos'])
    } else {
      this.router.navigate([''])
    }
  }
  sair() {
    localStorage.removeItem('010101')
    window.location.reload();

  }

}
