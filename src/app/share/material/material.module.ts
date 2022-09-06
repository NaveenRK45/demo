import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

const Materialcomponent = [
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Materialcomponent
  ],
  exports: [
    Materialcomponent
  ],
})
export class MaterialModule { }
