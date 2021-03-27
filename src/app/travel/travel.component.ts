import { Component, OnInit } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  products= products;
  constructor() { }

  ngOnInit(): void {
  }

}
