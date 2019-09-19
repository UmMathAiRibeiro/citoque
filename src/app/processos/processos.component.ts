import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('010101')) {
      this.router.navigate(['processos'])
    } else {
      this.router.navigate([''])
    }
  }
  sair() {
    localStorage.removeItem('010101')
    window.location.reload();

  }

}
