import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
  ],
  declarations: [],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
  ],
})
export class MdModule {
}
