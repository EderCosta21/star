import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme3',
  templateUrl: './filme3.page.html',
  styleUrls: ['./filme3.page.scss'],
})
export class Filme3Page implements OnInit {
  public descricao: Desc[] = [
    {
      episode: '3',
      diretor: 'George Lucas',
      produtor: 'Rick McCallum',
      releaseDate: '2005-05-19',
    }];

  constructor() { }

  ngOnInit() {
  }

}
interface Desc{

  episode: string;
  diretor: string;
  produtor: string;
  releaseDate: string;
 }
