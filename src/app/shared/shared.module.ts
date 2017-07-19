import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrimaryButtonComponent],
  exports: [PrimaryButtonComponent]
})
export class SharedModule { }
