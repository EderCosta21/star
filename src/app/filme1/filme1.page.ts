import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { ApiService } from '../api/apiService';
import { Film } from '../_interfaces/Film';
import { Character } from '../_interfaces/Character';
import { Planet } from '../_interfaces/Planet';
import { Starship } from '../_interfaces/Starship';
import { Vehicle } from '../_interfaces/Vehicle';
import { Species } from '../_interfaces/Species';

@Component({
  selector: 'app-film',
  templateUrl: 'filme1.page.html',
  styleUrls: ['filme1.page.scss'],
})
export class Filme1Page implements OnDestroy {

  subscriptions = new Subscription();
  film: Film;
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

  }

  ngOnDestroy() {
    // Making sure to destroy the rxjs subscriptions
    // when leaving
    this.subscriptions.unsubscribe();
  }
}
