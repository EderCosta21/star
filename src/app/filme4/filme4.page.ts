import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme4',
  templateUrl: './filme4.page.html',
  styleUrls: ['./filme4.page.scss'],
})
export class Filme4Page implements OnInit {
  public descricao: Desc[] = [
    {
      episode: '4',
      diretor: 'George Lucas',
      produtor: 'Gary Kurtz, Rick McCallum',
      releaseDate: '1977-05-25',
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
