// tslint:disable: space-before-function-paren only-arrow-functions no-string-literal
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  // UPDATE EXTERNO VARIAVEIS
  @ViewChild('solicitante_externo') solicitante_externo: ElementRef;
  @ViewChild('filiacao_externo') filiacao_externo: ElementRef;
  @ViewChild('nomeResponsavel_externo') nomeResponsavel_externo: ElementRef;
  @ViewChild('telefoneResponsavel_externo') telefoneResponsavel_externo: ElementRef;
  @ViewChild('emailResponsavel_externo') emailResponsavel_externo: ElementRef;
  @ViewChild('nomeProjeto_externo') nomeProjeto_externo: ElementRef;
  @ViewChild('orcamentoProjeto_externo') orcamentoProjeto_externo: ElementRef;
  @ViewChild('tipo_externo') tipo_externo: ElementRef;
  @ViewChild('resumo_externo') resumo_externo: ElementRef;
  @ViewChild('descricao_externo') descricao_externo: ElementRef;
  @ViewChild('descricao_externo') equipe_externo: ElementRef;
  // /UPDATE EXTERNO VARIAVEIS

  // UPDATE INTERNO VARIVEIS
  @ViewChild('curso_interno') curso_interno: ElementRef;
  @ViewChild('nomeProjeto_interno') nomeProjeto_interno: ElementRef;
  @ViewChild('nomeResponsavel_interno') nomeResponsavel_interno: ElementRef;
  @ViewChild('tipo_interno') tipo_interno: ElementRef;
  @ViewChild('resumo_interno') resumo_interno: ElementRef;
  @ViewChild('descricao_interno') descricao_interno: ElementRef;
  @ViewChild('equipe_interno') equipe_interno: ElementRef;
  // /UPDATE INTERNO VARIVEIS

  // UPDATE TCC VARIAVEIS
  @ViewChild('curso_tcc') curso_tcc: ElementRef;
  @ViewChild('periodo_tcc') periodo_tcc: ElementRef;
  @ViewChild('modulo_tcc') modulo_tcc: ElementRef;
  @ViewChild('turma_tcc') turma_tcc: ElementRef;
  @ViewChild('modalidade_tcc') modalidade_tcc: ElementRef;
  @ViewChild('nomeProjeto_tcc') nomeProjeto_tcc: ElementRef;
  @ViewChild('tipo_tcc') tipo_tcc: ElementRef;
  @ViewChild('resumo_tcc') resumo_tcc: ElementRef;
  @ViewChild('descricao_tcc') descricao_tcc: ElementRef;
  @ViewChild('equipe_tcc') equipe_tcc: ElementRef;
  @ViewChild('nomeResponsavel_tcc') nomeResponsavel_Tcc: ElementRef;
  // /UPDATE TCC VARIAVEIS
  public revisao = {
    leis: false,
    objetivo_info: false,
    orcamento: false,
    outro_recomen: null
  }

  public candidaturas = [];
  public emRevisao = [];
  public emDesenvolvimento = [];
  public candidaturasAtual = [];
  constructor(private router: Router, private service: BackendService) { }

  ngOnInit() {
    if (localStorage.getItem('010101')) {
    } else {
      this.router.navigate(['']);
    }
    this.service.selectInterno().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(candidatura => {
          candidatura['TipoProj'] = 'Projeto Interno';
          this.candidaturas.push(candidatura);
        });
      }
    });
    this.service.selectExterno().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(candidatura => {
          candidatura['TipoProj'] = 'Projeto Externo';
          this.candidaturas.push(candidatura);
        });
      }
    });
    this.service.selectTcc().subscribe(res => {
      res.json().result.forEach(candidatura => {
        candidatura['TipoProj'] = 'TCC Startup';
        this.candidaturas.push(candidatura);
      });
    });
    this.service.selectInternoEmDesenvolvimento().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(projetos => {
          const date = projetos.data_aprovacao.split('T');
          projetos.data_aprovacao = date[0];
          projetos['TipoProj'] = 'Projeto Interno';
          this.emDesenvolvimento.push(projetos);
        });
      }
    });
    this.service.selectExternoEmDesenvolvimento().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(projetos => {
          const date = projetos.data_aprovacao.split('T');
          projetos.data_aprovacao = date[0];
          projetos['TipoProj'] = 'Projeto Externo';
          this.emDesenvolvimento.push(projetos);
        });
      }
    });
    this.service.selectTccEmDesenvolvimento().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(projetos => {
          const date = projetos.data_aprovacao.split('T');
          projetos.data_aprovacao = date[0];
          projetos['TipoProj'] = 'TCC Startup';
          this.emDesenvolvimento.push(projetos);
        });
      }
    });
    this.service.selectInternoEmRevisao().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(projetos => {
          projetos['TipoProj'] = 'Projeto Interno';
          this.emRevisao.push(projetos);
        });
      }
    });
    this.service.selectExternoEmRevisao().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(projetos => {
          projetos['TipoProj'] = 'Projeto Externo';
          this.emRevisao.push(projetos);
        });
      }
    });
    this.service.selectTccEmRevisao().subscribe(res => {
      if (res.json().status !== 200) {
        swal('ERRO', 'Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
          + res.json().result.code + ": " + res.json().result.errno, 'error')
      } else {
        res.json().result.forEach(projetos => {
          projetos['TipoProj'] = 'TCC Startup';
          this.emRevisao.push(projetos);
        });
      }
    });
  }

  sair() {
    localStorage.removeItem('010101');
    window.location.reload();
  }

  modal(candidatura) {
    this.candidaturasAtual = [];
    this.candidaturasAtual.push(candidatura);
    console.log('candidaturaModal');
    console.log(this.candidaturasAtual);
  }

  modalRevisao() {
    document.getElementById('fecharModalAtual').click()
    document.getElementById('modalRevisaobtn').click()
  }

  deletarCandidatura(candidatura) {
    console.log(candidatura);
    swal({
      title: 'Você tem certeza?',
      // tslint:disable-next-line: quotemark
      text: "Ao apertar 'OK' você irá deletar o projeto, essa ação é irreversível",
      icon: 'warning',
      dangerMode: true,
      buttons: ['Não', true]
    }).then((willDelete) => {
      if (willDelete) {
        if (candidatura.id_interno) {
          this.service.deleteInterno(candidatura.id_interno).subscribe(res => {
            if (res.json().status !== 200) {
              swal('ERRO', 'Não foi possivel deletar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                + res.json().result.code + ": " + res.json().result.errno, 'error');
              console.log(res);
            } else {
              swal('SUCESSO', 'Candidatura deletada com sucesso', 'success').then(function () {
                window.location.reload();
              });
            }
          });
        }
        if (candidatura.id_externo) {
          this.service.deleteExterno(candidatura.id_externo).subscribe(res => {
            if (res.json().status !== 200) {
              swal('ERRO', 'Não foi possivel deletar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                + res.json().result.code + ": " + res.json().result.errno, 'error');
              console.log(res);
            } else {
              swal('SUCESSO', 'Candidatura deletada com sucesso', 'success').then(function () {
                window.location.reload();
              });
            }
          });
        }
        if (candidatura.id_tcc) {
          this.service.deleteTcc(candidatura.id_tcc).subscribe(res => {
            if (res.json().status !== 200) {
              swal('ERRO', 'Não foi possivel deletar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                + res.json().result.code + ": " + res.json().result.errno, 'error');
              console.log(res);
            } else {
              swal('SUCESSO', 'Candidatura deletada com sucesso', 'success').then(function () {
                window.location.reload();
              });
            }
          });
        }
      }
    });
  }

  aprovarCandidatura(candidatura) {
    console.log(candidatura);
    swal({
      title: 'Você tem certeza?',
      // tslint:disable-next-line: quotemark
      text: "Ao apertar 'OK' você irá aprovar o projeto, essa ação é irreversível",
      icon: 'warning',
      dangerMode: true,
      buttons: ['Não', true]
    }).then((willAprove) => {
      if (willAprove) {
        if (candidatura.id_interno) {
          const data = {
            id: candidatura.id_interno,
            date: new Date()
          };
          this.service.aproveInterno(data).subscribe(res => {
            if (res.json().status !== 200) {
              swal('ERRO', 'Não foi possivel aprovar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                + res.json().result.code + ": " + res.json().result.errno, 'error');
              console.log(res);
            } else {
              swal('SUCESSO', 'Projeto aprovado com sucesso', 'success').then(function () {
                window.location.reload();
              });
            }
          });
        }
        if (candidatura.id_externo) {
          const data = {
            id: candidatura.id_externo,
            date: new Date()
          };
          this.service.aproveExterno(data).subscribe(res => {
            if (res.json().status !== 200) {
              swal('ERRO', 'Não foi possivel aprovar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                + res.json().result.code + ": " + res.json().result.errno, 'error');
              console.log(res);
            } else {
              swal('SUCESSO', 'Projeto aprovado com sucesso', 'success').then(function () {
                window.location.reload();
              });
            }
          });
        }
        if (candidatura.id_tcc) {
          console.log(candidatura.id_tcc);
          const data = {
            id: candidatura.id_tcc,
            date: new Date()
          };
          this.service.aproveTcc(data).subscribe(res => {
            if (res.json().status !== 200) {
              swal('ERRO', 'Não foi possivel aprovar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                + res.json().result.code + ": " + res.json().result.errno, 'error');
              console.log(res);
            } else {
              swal('SUCESSO', 'Projeto aprovado com sucesso', 'success').then(function () {
                window.location.reload();
              });
            }
          });
        }
      }
    });
  }

  enviarRevisao(candidatura) {
    console.log("entrei");
    if (this.revisao.outro_recomen != null) {
      this.revisao.outro_recomen = this.revisao.outro_recomen.trim()
    }
    if (this.revisao.leis || this.revisao.objetivo_info || this.revisao.orcamento || this.revisao.outro_recomen) {
      swal({
        title: 'Você tem certeza?',
        text: 'Ao apertar "OK" você irá mandar o projeto para a revisão',
        icon: 'warning',
        dangerMode: true,
        buttons: ['Não', true]
      }).then((willAprove) => {
        if (willAprove) {
          var texto = "";
          if (this.revisao.leis == true) {
            texto += "Infringe leis"
            if (this.revisao.objetivo_info == true) {
              texto += ", objetivo do projeto incompreendido/Poucas informações"
              if (this.revisao.orcamento == true) {
                texto += ", valor do orçamento fora dos parâmetros"
                if (this.revisao.outro_recomen) {
                  texto += ", " + this.revisao.outro_recomen
                }
              }
            } else if (this.revisao.orcamento == true) {
              texto += ", valor do orçamento fora dos parâmetros"
              if (this.revisao.outro_recomen) {
                texto += ", " + this.revisao.outro_recomen
              }
            } else if (this.revisao.outro_recomen) {
              texto += ", " + this.revisao.outro_recomen
            }
          } else if (this.revisao.objetivo_info == true) {
            texto += "Objetivo do projeto incompreendido/Poucas informações"
            if (this.revisao.orcamento == true) {
              texto += ", valor do orçamento fora dos parâmetros"
              if (this.revisao.outro_recomen) {
                texto += ", " + this.revisao.outro_recomen
              }
            } else if (this.revisao.outro_recomen) {
              texto += ", " + this.revisao.outro_recomen
            }
          } else if (this.revisao.orcamento == true) {
            texto += "Valor do orçamento fora dos parâmetros"
            if (this.revisao.outro_recomen) {
              texto += ", " + this.revisao.outro_recomen
            }
          } else if (this.revisao.outro_recomen) {
            texto += this.revisao.outro_recomen
          }
          if (candidatura.id_tcc) {
            const data = {
              revisao: texto,
              id: candidatura.id_tcc
            }
            this.service.revisaoTcc(data).subscribe(res => {
              if (res.json().status !== 200) {
                swal('ERRO', 'Não foi possivel enviar o projeto para revisão (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                  + res.json().result.code + ": " + res.json().result.errno, 'error');
                console.log(res);
              } else {
                swal('SUCESSO', 'Projeto enviado para revisão', 'success').then(function () {
                  window.location.reload();
                });
              }
            })
          }
          if (candidatura.id_externo) {
            const data = {
              revisao: texto,
              id: candidatura.id_externo
            }
            this.service.revisaoExterno(data).subscribe(res => {
              if (res.json().status !== 200) {
                swal('ERRO', 'Não foi possivel enviar o projeto para revisão (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                  + res.json().result.code + ": " + res.json().result.errno, 'error');
                console.log(res);
              } else {
                swal('SUCESSO', 'Projeto enviado para revisão', 'success').then(function () {
                  window.location.reload();
                });
              }
            })
          }
          if (candidatura.id_interno) {
            const data = {
              revisao: texto,
              id: candidatura.id_interno
            }
            this.service.revisaoInterno(data).subscribe(res => {
              if (res.json().status !== 200) {
                swal('ERRO', 'Não foi possivel enviar o projeto para revisão (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                  + res.json().result.code + ": " + res.json().result.errno, 'error');
                console.log(res);
              } else {
                swal('SUCESSO', 'Projeto enviado para revisão', 'success').then(function () {
                  window.location.reload();
                });
              }
            })
          }



        }
      })
    } else {
      swal('ERRO', 'Preencha todos os campos', 'warning');
    }
  }

  reenviarExterno() {
    let data = {
      id: this.candidaturasAtual[0].id_externo,
      solicitante: this.solicitante_externo.nativeElement.value,
      filiacao: this.filiacao_externo.nativeElement.value,
      nomeResponsavel: this.nomeResponsavel_externo.nativeElement.value,
      telefoneResponsavel: this.telefoneResponsavel_externo.nativeElement.value,
      emailResponsavel: this.emailResponsavel_externo.nativeElement.value,
      nomeProjeto: this.nomeProjeto_externo.nativeElement.value,
      orcamentoProjeto: this.orcamentoProjeto_externo.nativeElement.value,
      tipo: this.tipo_externo.nativeElement.value,
      resumo: this.resumo_externo.nativeElement.value,
      descricao: this.descricao_externo.nativeElement.value,
      equipe: this.equipe_externo.nativeElement.value
    }
    if (data.id && data.solicitante && data.filiacao && data.nomeResponsavel && data.telefoneResponsavel
      && data.emailResponsavel && data.nomeProjeto && data.orcamentoProjeto && data.tipo && data.resumo
      && data.descricao && data.equipe) {
      this.service.reenviarExterno(data).subscribe(res => {
        if (res.json().status !== 200) {
          console.log(res.json().result);
          swal('ERRO', 'Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
            + res.json().result.code + ": " + res.json().result.errno, 'error');
          console.log(res);
        } else {
          swal('SUCESSO', 'Candidatura reenviada com sucesso', 'success').then(function () {
            window.location.reload();
          });
        }
      })
    } else {
      swal('ERRO', 'Preencha todos os campos', 'warning');
    }
  }

  reenviarInterno() {
    if (this.curso_interno.nativeElement.value && this.nomeProjeto_interno.nativeElement.value
      && this.nomeResponsavel_interno.nativeElement.value && this.tipo_interno.nativeElement.value
      && this.resumo_interno.nativeElement.value && this.resumo_interno.nativeElement.value
      && this.descricao_interno.nativeElement.value && this.equipe_interno.nativeElement.value) {
      let data = {
        id: this.candidaturasAtual[0].id_interno,
        curso: this.curso_interno.nativeElement.value,
        nomeProjeto: this.nomeProjeto_interno.nativeElement.value,
        nomeResponsavel: this.nomeResponsavel_interno.nativeElement.value,
        tipo: this.tipo_interno.nativeElement.value,
        resumo: this.resumo_interno.nativeElement.value,
        descricao: this.descricao_interno.nativeElement.value,
        equipe: this.equipe_interno.nativeElement.value
      }
      this.service.reenviarInterno(data).subscribe(res => {
        if (res.json().status !== 200) {
          console.log(res.json().result);
          swal('ERRO', 'Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
            + res.json().result.code + ": " + res.json().result.errno, 'error');
          console.log(res);
        } else {
          swal('SUCESSO', 'Candidatura reenviada com sucesso', 'success').then(function () {
            window.location.reload();
          });
        }
      })
    } else {
      swal('ERRO', 'Preencha todos os campos', 'warning');
    }
  }

  reenviarTcc() {
    if (this.curso_tcc.nativeElement.value && this.periodo_tcc.nativeElement.value
      && this.modulo_tcc.nativeElement.value && this.turma_tcc.nativeElement.value
      && this.modalidade_tcc.nativeElement.value && this.nomeProjeto_tcc.nativeElement.value
      && this.tipo_tcc.nativeElement.value && this.resumo_tcc.nativeElement.value
      && this.descricao_tcc.nativeElement.value && this.equipe_tcc.nativeElement.value
      && this.nomeResponsavel_Tcc.nativeElement.value) {
      let data = {
        id: this.candidaturasAtual[0].id_tcc,
        curso: this.curso_tcc.nativeElement.value,
        periodo: this.periodo_tcc.nativeElement.value,
        modulo: this.modulo_tcc.nativeElement.value,
        turma: this.turma_tcc.nativeElement.value,
        modalidade: this.modalidade_tcc.nativeElement.value,
        nomeProjeto: this.nomeProjeto_tcc.nativeElement.value,
        tipo: this.tipo_tcc.nativeElement.value,
        resumo: this.resumo_tcc.nativeElement.value,
        descricao: this.descricao_tcc.nativeElement.value,
        equipe: this.equipe_tcc.nativeElement.value,
        nomeResponsavel: this.nomeResponsavel_Tcc.nativeElement.value
      }
      this.service.reenviarTcc(data).subscribe(res => {
        if (res.json().status !== 200) {
          console.log(res.json().result);
          swal('ERRO', 'Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
            + res.json().result.code + ": " + res.json().result.errno, 'error');
          console.log(res);
        } else {
          swal('SUCESSO', 'Candidatura reenviada com sucesso', 'success').then(function () {
            window.location.reload();
          });
        }
      })
    } else {
      swal('ERRO', 'Preencha todos os campos', 'warning');
    }
  }

}
