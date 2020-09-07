import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})

export class VeiculosPage implements OnInit {
  public component: Carros[] = [

    {
    nome: 'Vulture Droid',
    modelo: 'Caça estelar dróide classe abutre',
    fabricante: 'Haor Chall Engineering, Baktoid Armor Workshop',
    comprimento: '3,5',
    Velocidade: '1200',
    Tripulacao: '0',
    passageiros: '0',
    cargaCapacidade: '0',
    consumiveis: 'nenhum',
    classe: 'starfighter',
    pilotos: 'N/A',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Carros{


   nome: string[100];
   modelo: string;
   fabricante: string;
   comprimento: string;
   Velocidade: string;
   Tripulacao: string;
   passageiros: string;
   cargaCapacidade: string;
   consumiveis: string;
   pilotos: string;
   classe: string;
  }
