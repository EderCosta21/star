import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, Subject } from 'rxjs';
import { Filme, getDate } from '../service/Filme';
import { Films } from '../service/Films';


const FILMS_KEY = 'FILMS';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private films = new Subject<Array<Filme>>();

  constructor(
    public storage: Storage,
  ) {}

  public async clear(): Promise<void> {
    await this.storage.clear();
  }

  public async getFilm(id: number) {
    return await this.getFilms()
      .then((films: Array<Filme>) =>
        films.filter(f => f.episode_id === id)[0]
      );
  }

  public async getFilms() {
    return await this.storage.get(FILMS_KEY)
      .then((films: Array<Filme>) => films.sort(this.sortFilms));
  }

  public getFilmsObservable(): Observable<Array<Filme>> {
    return this.films.asObservable();
  }

  private sortFilms(film1: Filme, film2: Filme): number {
    const d1 = getDate(film1);
    const d2 = getDate(film2);
    if (d1 > d2) {
      return 1;
    }
    if (d2 > d1) {
      return -1;
    }
    return 0;
  }

  public async setFilms(films: Films) {
    await this.storage.set(FILMS_KEY, films.results);
    this.films.next(films.results.sort(this.sortFilms));
  }
}

