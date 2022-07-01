import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [MaterialsModule, FlexLayoutModule],
})
export class SharedModule {}
