import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [FrontendComponent, HomeComponent],
  imports: [CommonModule, FrontendRoutingModule, SharedModule],
})
export class FrontModule {}
