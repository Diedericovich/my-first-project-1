import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero = this.heroes[0];

  clicked = 0;

  HandleClicked() {
    if (this.clicked % 2 === 0) {
       this.selectedHero.imagePath = "http://placekitten.com/400/600"
    }
    else {
       this.selectedHero.imagePath = "http://placekitten.com/600/400"
    }

    this.clicked++;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
