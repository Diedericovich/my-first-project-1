import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Make parameter an input param -> Can be filled from outside this class.
  //@Input() hero?: Hero;
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    // via ActivatedRoute gaan we parameters uit de url extracten
    private location: Location,
    //via Location checken welk object eraan gelinkt is, zodat we terug kunnen gaan
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(x => this.hero = x);
  }

  goBack(): void {
    this.location.back();
  }

}