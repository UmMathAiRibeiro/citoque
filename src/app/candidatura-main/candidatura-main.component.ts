import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-candidatura-main',
  templateUrl: './candidatura-main.component.html',
  styleUrls: ['./candidatura-main.component.css']
})
export class CandidaturaMainComponent implements OnInit {

  @ViewChild('regular') regular: ElementRef;
  @ViewChild('mediotec') mediotec: ElementRef;

  public tcc = {
    iduser: parseInt(localStorage.getItem('010101')),
    curso: null,
    periodo: null,
    modulo: null,
    turma: null,
    modalidade: null,
    nomeProjeto: null,
    nomeResponsavel: null,
    tipo: null,
    resumo: null,
    descricao: null,
    equipe: null
  }

  public interno = {
    iduser: parseInt(localStorage.getItem('010101')),
    curso: null,
    nomeProjeto: null,
    nomeResponsavel: null,
    tipo: null,
    resumo: null,
    descricao: null,
    equipe: null
  }

  public externo = {
    iduser: parseInt(localStorage.getItem('010101')),
    solicitante: null,
    filiacao: null,
    nomeResponsavel: null,
    telefoneResponsavel: null,
    emailResponsavel: null,
    nomeProjeto: null,
    remuneracao: null,
    tipo: null,
    resumo: null,
    descricao: null,
    equipe: null
  }

  public userForm = new FormGroup({
    regular: new FormControl(),
    mediotec: new FormControl()
  })


  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('010101')) {
      this.router.navigate(['candidatura'])
    } else {
      this.router.navigate([''])
    }
  }
  sair() {
    localStorage.removeItem('010101')
    window.location.reload();
  }
  validarRadio() {

    if (this.mediotec.nativeElement.checked == true) {
      this.tcc.modalidade = this.mediotec.nativeElement.value
    } else if (this.regular.nativeElement.checked == true) {
      this.tcc.modalidade = this.regular.nativeElement.value
    }

  }
  testar() {

    this.validarRadio()
    if (this.tcc.curso &&
      this.tcc.descricao &&
      this.tcc.equipe &&
      this.tcc.modalidade &&
      this.tcc.modulo &&
      this.tcc.nomeProjeto &&
      this.tcc.nomeResponsavel &&
      this.tcc.periodo &&
      this.tcc.resumo &&
      this.tcc.tipo &&
      this.tcc.turma) {
      swal('SUCESSO', 'To recebendo tudo garoto', 'sucCess')
    } else {
      swal('ERRO', 'ta faltanto coisa viado', 'warning')
    }
    console.log(this.tcc);
  }




}
