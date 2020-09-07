import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // tslint:disable-next-line: variable-name
  private _componentes: Componentes[] = [
    {
      nome: 'The Phantom Menace',
      link: '/filme1'
    },

    {
      nome: 'Attack of the Clones',
      link: '/filme2'
    },
    {
      nome: 'Revenge of the Sith',
      link: '/filme3'
    },
    {
      nome: 'A New Hope ',
      link: '/filme4'
    },
    {
      nome: 'The Empire Strikes Back',
      link: '/filme5'
    },

    {
      nome: 'Return of the Jedi',
      link: '/filme6'
    },
     ];
  public get componentes(): Componentes[] {
    return this._componentes;
  }
  public set componentes(value: Componentes[]) {
    this._componentes = value;
  }

  constructor() {}

}

interface Componentes{

  // tslint:disable-next-line: ban-types
   nome: String;
  // tslint:disable-next-line: ban-types
   link: String;
  }
