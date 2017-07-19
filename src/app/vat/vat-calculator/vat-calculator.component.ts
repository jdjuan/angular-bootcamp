import { VatService } from './../vat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {

  @Input() vat: number;
  article = "Tesla";
  value: number = 10000;
  result = 0;
  myPipe = 'currency'

  constructor(
    private vatService: VatService
  ) { }

  ngOnInit() {
  }

  calculate(){
    this.result = this.vatService.calculate(this.value, this.vat);
  }

  

}
