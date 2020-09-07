import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.page.html',
  styleUrls: ['./especies.page.scss'],
})
export class EspeciesPage implements OnInit {
  public especies: Especies[] = [

    {

    nome: 'Humano',
    classificacao: 'Mamífero',
    designacao: 'senciente',
    alturaMedia: '180',
    skinColors: 'caucasiano, preto, asiático, hispânico',
    hairColors: 'loiro, castanho, preto, vermelho',
    eyeColors: 'marrom, azul, verde, avelã, cinza, âmbar',
    averageLifespan: '120',
    homeWorld: 'http://swapi.dev/api/planets/9/',
    idiomaOrigem: 'Galactic Basic',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
interface Especies{


  nome: string[100];
   classificacao: string;
   designacao: string;
   alturaMedia: string;
   skinColors: string;
   hairColors: string;
   eyeColors: string;
   averageLifespan: string;
   homeWorld: string;
   idiomaOrigem: string;
   }
