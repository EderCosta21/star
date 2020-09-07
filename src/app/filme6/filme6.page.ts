import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme6',
  templateUrl: './filme6.page.html',
  styleUrls: ['./filme6.page.scss'],
})
export class Filme6Page implements OnInit {
  public descricao: Desc[] = [
    {
      episode: '6',
      diretor: 'Richard Marquand',
      produtor: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
      releaseDate: '1983-05-25',
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
