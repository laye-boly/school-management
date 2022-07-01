import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../shared/shared.module';
import { BackOfficeRoutingModule } from './backoffioce-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [BackofficeComponent, HomeComponent],
  imports: [CommonModule, SharedModule, BackOfficeRoutingModule],
})
export class BackofficeModule {}
