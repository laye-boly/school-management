import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { FrontendComponent } from './frontend.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
