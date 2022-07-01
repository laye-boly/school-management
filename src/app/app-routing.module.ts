import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'portail',
    // loadChildren: 'src/app/frontend/frontend.module#FrontendModule',
    loadChildren: () =>
      import('src/app/frontend/frontend.module').then((m) => m.FrontModule),
  },
  {
    path: 'backoffice',
    // loadChildren: 'src/app/backend/backend.module#BackendModule',
    loadChildren: () =>
      import('src/app/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule
      ),
  },

  {
    path: '',
    redirectTo: 'portail',
    pathMatch: 'full',
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
