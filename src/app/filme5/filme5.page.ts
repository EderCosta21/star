import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme5',
  templateUrl: './filme5.page.html',
  styleUrls: ['./filme5.page.scss'],
})
export class Filme5Page implements OnInit {
  public descricao: Desc[] = [
    {
      episode: '5',
      diretor: 'Irvin Kershner',
      produtor: 'Gary Kurtz, Rick McCallum',
      releaseDate: '1980-05-17',
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
