import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroHeading: any;
  heroText: string;
  br:HTMLElement;

  constructor() { 
    this.heroHeading = "We are your ultimate Summer experience Provider!";
  this.heroText = "with hundrade of water holiday destinations offered, we are your natural choice for planing it all out!";
  
  }
  
  ngOnInit(): void {
  }

}
