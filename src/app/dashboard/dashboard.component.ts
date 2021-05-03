import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { HeroService } from '../hero.service';
import { SuperPower } from '../superpower';
import { SuperpowerService} from '../superpower.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes: Hero [] = [];
superpowers: SuperPower [] = [];

  constructor(private heroService: HeroService, private superpowerService: SuperpowerService) { }

  getSuperPowers(): void {
    this.superpowerService.getSuperPowers()
    .subscribe(x => this.superpowers = x.sort(() => Math.random() - 0.5).slice(0, 4));

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x.slice(1, 5))

  }

  ngOnInit(): void {
    this.getHeroes();
    this.getSuperPowers();
  }



}
