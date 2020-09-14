import { Filme1Page } from './../filme1/filme1.page';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Films} from '../_interfaces/Films';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlId = 'https://swapi.dev/api';
  public url = 'https://swapi.dev/api/films/';
  api: Observable<any>;

  constructor(private http: HttpClient,  private storageService: StorageService, ) { }
  buscarInfoFilmeId(): Observable<any> {

    return this.http.get(this.url).pipe(  map(results => results));
  }


  buscarInfoFilme(): Observable<any> {

    return this.http.get(this.url).pipe(  map(results => results));

  }
  public async fetchFilms(): Promise<Films> {
    return this.http.get<Films>(`${this.urlId}/films/`).toPromise()
      .then(async (films: Films) => {
        await this.storageService.setFilms(films);
        return films;
      });
  }
  // get(id: number) {
  //   return new Promise((resolve, reject) => {
  //     const baseurl = this.urlId + 'films/' + id + '/';

  //     this.http.get(baseurl)
  //       .subscribe((result: any) => {
  //         resolve(result);
  //       },
  //       (error) => {
  //         reject(error);
  //       });
  //   });
  // }
  public async get<T>(fullUrl: string): Promise<T> {
    return this.http.get<T>(fullUrl).toPromise();
  }

}

