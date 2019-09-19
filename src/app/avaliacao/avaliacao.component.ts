import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('010101')) {
      this.router.navigate(['avaliacao'])
    } else {
      this.router.navigate([''])
    }
  }
  sair() {
    localStorage.removeItem('010101')
    window.location.reload();

  }
}
