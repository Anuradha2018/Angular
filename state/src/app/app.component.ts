import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Hero';
  currentHero = new Hero (1, 'Tornado', new Date(1970, 1, 25));
  heroImageUrl = 'assets/heroImage.jpg';
  // Malicious Content
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  isUnchanged: Boolean = true; // for true, changed was not flashing
  isSpecial: Boolean = true;
  canSave: Boolean = true;
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  currentClasses: {};
  currentStyles: {};
  setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}
  getVal(): number {
    return 1;
  }
  deleteHero(hero: Hero) {
    console.log(hero.name);
    alert(`delete ${hero.name}`);
  }
  onSave(event: KeyboardEvent) {
    alert('Saved!!');
  }
  trackByHeroes(index: number, hero: Hero): number { return hero.id; }
}
