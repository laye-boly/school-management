import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BackofficeComponent } from './backoffice.component';
import { UsersComponent } from './components/users/users.component';
import { SchoolsComponent } from './components/schools/schools.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'users',
        component: UsersComponent,
      },

      {
        path: 'schools',
        component: SchoolsComponent,
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
export class BackOfficeRoutingModule {}
