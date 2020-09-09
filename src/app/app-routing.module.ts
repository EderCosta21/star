import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: './film-details',
    pathMatch: 'full'
  },
  {
    path: 'filme6',
    loadChildren: () => import('./filme6/filme6.module').then( m => m.Filme6PageModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then( m => m.FilmsPageModule)
  },
  {
    path: 'film-details',
    loadChildren: () => import('./film-details/film-details.module').then( m => m.FilmDetailsPageModule)
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
