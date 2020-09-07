import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme2',
  templateUrl: './filme2.page.html',
  styleUrls: ['./filme2.page.scss'],
})
export class Filme2Page  {
  public descricao: Desc[] = [
    {
      episode: '2',
      diretor: 'George Lucas',
      produtor: 'Rick McCallum',
      releaseDate: '2002-05-16',
    }];

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {  }


}
interface Desc{

   episode: string;
   diretor: string;
   produtor: string;
   releaseDate: string;
  }
