import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  // inputs: ['hero'],
  // outputs: ['deleteRequest'],
  template: `<div>
  <img src="{{heroImageUrl}}">
  <span [style.text-decoration]="lineThrough">
    {{prefix}} {{hero?.name}}
  </span>
  <button (click)="delete()">Delete</button>
</div>`,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()  hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();
  // hero: Hero = new Hero(-1, 'Windstorm');
  heroImageUrl = 'assets/heroImage.jpg';
  // This component makes a request but it can't actually delete a hero.
// deleteRequest = new EventEmitter<Hero>();

delete() {
  this.deleteRequest.emit(this.hero);
}
  constructor() { }

  ngOnInit() {
    this.hero.name = 'Windstorm';
    this.hero.id = 2;
  }

}


