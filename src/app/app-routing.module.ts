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

  {
    path: 'filme1',
    loadChildren: () => import('./filme1/filme1.module').then( m => m.Filme1PageModule)
  },
  {
    path: 'filme2',
    loadChildren: () => import('./filme2/filme2.module').then( m => m.Filme2PageModule)
  },
  {
    path: 'filme3',
    loadChildren: () => import('./filme3/filme3.module').then( m => m.Filme3PageModule)
  },
  {
    path: 'filme4',
    loadChildren: () => import('./filme4/filme4.module').then( m => m.Filme4PageModule)
  },
  {
    path: 'filme5',
    loadChildren: () => import('./filme5/filme5.module').then( m => m.Filme5PageModule)
  },
  {
    path: 'filme6',
    loadChildren: () => import('./filme6/filme6.module').then( m => m.Filme6PageModule)
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./veiculos/veiculos.module').then( m => m.VeiculosPageModule)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then( m => m.PessoasPageModule)
  },
  {
    path: 'planeta',
    loadChildren: () => import('./planeta/planeta.module').then( m => m.PlanetaPageModule)
  },
  {
    path: 'naves',
    loadChildren: () => import('./naves/naves.module').then( m => m.NavesPageModule)
  },
  {
    path: 'especies',
    loadChildren: () => import('./especies/especies.module').then( m => m.EspeciesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
