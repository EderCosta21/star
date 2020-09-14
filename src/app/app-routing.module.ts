import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'film/:id', loadChildren: () => import('./filme1/filme1.module').then( m => m.Filme1PageModule)},
  { path: 'pessoa/:id', loadChildren: () => import('./pessoas/pessoas.module').then( m => m.PessoasPageModule)},
  { path: 'veiculos/:id', loadChildren: () => import('./veiculos/veiculos.module').then( m => m.VeiculosPageModule)},
  { path: 'planetas/:id', loadChildren: () => import('./planetas/planetas.module').then( m => m.PlanetasPageModule)},
  { path: 'naves/:id', loadChildren: () => import('./naves/naves.module').then( m => m.NavesPageModule)},
  { path: 'especie/:id', loadChildren: () => import('./especies/especies-routing.module').then( m => m.EspeciesPageRoutingModule)},

  {
    path: 'filme1',
    loadChildren: () => import('./filme1/filme1.module').then( m => m.Filme1PageModule)
  },

  {
    path: 'especies',
    loadChildren: () => import('./especies/especies.module').then( m => m.EspeciesPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./api/apiService').then( m => m.ApiService)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then( m => m.PessoasPageModule)
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./veiculos/veiculos.module').then( m => m.VeiculosPageModule)
  },
  {
    path: 'planetas',
    loadChildren: () => import('./planetas/planetas.module').then( m => m.PlanetasPageModule)
  },
  {
    path: 'naves',
    loadChildren: () => import('./naves/naves.module').then( m => m.NavesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
