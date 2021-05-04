import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero} from './hero';
import { SuperPower} from './superpower';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {id: 11, name: 'Dr. Nice', imagePath: "http://placekitten.com/400/600"},
      {id: 12, name: 'Iron man', imagePath: "http://placekitten.com/400/600"},
      {id: 13, name: 'Spiderman', imagePath: "http://placekitten.com/400/600"},
      {id: 14, name: 'Batman', imagePath: "http://placekitten.com/400/600"},
      {id: 15, name: 'Dr. Not Nice', imagePath: "http://placekitten.com/400/600"},
      {id: 16, name: 'Dr. Unpleasant', imagePath: "http://placekitten.com/400/600"},
  ];
    const superpowers:SuperPower[] = [
      {id: 20, name: 'invisibility', type: 'passive', isOverpowered: false},
      {id: 21, name: 'immortality', type: 'passive', isOverpowered: true},
      {id: 22, name: 'flying', type: 'passive', isOverpowered: false},
      {id: 23, name: 'telekinese', type: 'active', isOverpowered: true},
      {id: 24, name: 'uberStrength', type: 'passive', isOverpowered: true},
      {id: 25, name: 'ultraFlexible', type: 'passive', isOverpowered: false},
      {id: 26, name: 'LightingSpeed', type: 'active', isOverpowered: false},
      {id: 27, name: 'SlowTime', type: 'active', isOverpowered: true},
      {id: 28, name: 'InfiniteBreath', type: 'passive', isOverpowered: false},
      {id: 29, name: 'IceCubination', type: 'active', isOverpowered: false},
      {id: 30, name: 'Volcano', type: 'active', isOverpowered: true},
  ];

  return { heroes, superpowers };
  }

   

  constructor() { }
}
