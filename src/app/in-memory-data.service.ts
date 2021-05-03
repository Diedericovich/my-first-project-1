import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero} from './hero';

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
  return { heroes };
  }

  constructor() { }
}
