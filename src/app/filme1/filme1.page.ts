import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme1',
  templateUrl: './filme1.page.html',
  styleUrls: ['./filme1.page.scss'],
})
export class Filme1Page implements OnInit {
  public descricao: Desc[] = [
    {
      episode: '1',
      diretor: 'George Lucas',
      produtor: 'Rick McCallum',
      releaseDate: '2005-05-19',
    }];

  ngOnInit() {
  }

}

interface Desc{
  episode: string;
  diretor: string;
  produtor: string;
  releaseDate: string;
 }
