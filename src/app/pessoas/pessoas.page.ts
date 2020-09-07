import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {

  public pessoa1: Pessoa[] = [

    {
      nome: 'C-3PO',
      altura: '167',
      massa: '75',
      hearColor: 'n / a',
      skinColor: 'ouro',
      eyeColor: 'amarelo',
      birthYear: '112BBY',
      genero: 'n / a',
    },
  ];

  constructor() { }

  ngOnInit() {

  }

}

interface Pessoa{


  nome: string;
  altura: string;
  massa: string;
  hearColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  genero: string;

 }
