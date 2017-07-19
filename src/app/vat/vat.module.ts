import { SharedModule } from './../shared/shared.module';
import { VatService } from './vat.service';
import { VatComponent } from './vat/vat.component';
import { VatCalculatorComponent } from './vat-calculator/vat-calculator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    VatCalculatorComponent,
    VatComponent
  ],
  providers: [VatService],
  exports: [VatComponent]
})
export class VatModule { }
