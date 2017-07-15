import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: ':route',
    loadChildren: './page/page.module.ts#PageModule'
  }
];
