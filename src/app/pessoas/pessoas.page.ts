import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { ApiService } from '../api/apiService';
import { Film } from '../_interfaces/Film';
import { Character } from '../_interfaces/Character';

@Component({
  selector: 'app-film',
  templateUrl: 'pessoas.page.html',
  styleUrls: ['pessoas.page.scss'],
})
export class PessoasPage implements OnDestroy {

  subscriptions = new Subscription();
  film: Film;
  characters: Character[];
  loading = true;

  constructor(
    private storage: StorageService,
    private api: ApiService,
    private route: ActivatedRoute,
  ) {
    // Getting the url :id parameter
    this.subscriptions.add(
      this.route.params
        .pipe(map(p => p.id))
        .subscribe(id => this.setUpPage(parseInt(id, 10)))
    );
  }

  async setUpPage(id: number) {
    // Retrieving from storage the film from the id
    this.film = await this.storage.getFilm(id);

    // Querying each nested film components array
    this.characters = await Promise.all(
      this.film.characters.map(url =>
        this.api.get<Character>(url)));
  }

  ngOnDestroy() {
    // Making sure to destroy the rxjs subscriptions
    // when leaving
    this.subscriptions.unsubscribe();
  }
}
