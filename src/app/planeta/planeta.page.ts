import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.page.html',
  styleUrls: ['./planeta.page.scss'],
})
export class PlanetaPage implements OnInit {
  public planeta: Planeta[] = [

    {
    nome: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diamentro: '10200',
    clima: 'temperado, tropical',
    gravidade: '1 padrão',
    terreno: 'selva, florestas tropicai',
    surfaceWater: '8',
    populacao: '1000',
    moradores: 'N/Ar',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Planeta{


  nome: string;
  rotation_period: string;
  orbital_period: string;
  diamentro: string;
  clima: string;
  gravidade: string;
  terreno: string;
  surfaceWater: string;
  populacao: string;
  moradores: string;

   }
