import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.page.html',
  styleUrls: ['./naves.page.scss'],
})
export class NavesPage implements OnInit {
  public naves: Naves[] = [

    {
    nome: 'Estrela da Morte',
    modelo: 'DS-1 Orbital Battle Station',
    fabricante: 'Departamento Imperial de Pesquisa Militar, Sistemas de Frota Sienar',
    costInCredits: '1000000000000',
    comprimento: '120000',
    Velocidade: 'N/A',
    Tripulacao: '342.953',
    passageiro: '843.342',
    cargaCapacidade: '1000000000000',
    consumiveis: '3 anos',
    hyperdriveRating: '4.0',
    MGLT: '10',
    classe: 'Deep Space Mobile Battlestation',
    piloto: 'N/A',
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
interface Naves{


  nome: string[100];
   modelo: string;
   fabricante: string;
   costInCredits: string;
   comprimento: string;
   Velocidade: string;
   Tripulacao: string;
   passageiro: string;
   cargaCapacidade: string;
   consumiveis: string;
   hyperdriveRating: string;
   MGLT: string;
   classe: string;
   piloto: string;
   }
