import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-price',
  templateUrl: './calculate-price.component.html',
  styleUrls: ['./calculate-price.component.scss'],
})
export class CalculatePriceComponent implements OnInit {
  selectedPackage = false;
  selectedPlan = 'basic';
  constructor() {}

  ngOnInit(): void {}
}
