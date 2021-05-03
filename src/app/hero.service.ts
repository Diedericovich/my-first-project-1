import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import { MessagesService } from './messages.service';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  

  constructor(private messagesService: MessagesService, private http: HttpClient) { }
    private heroesUrl = 'api/heroes';

    // Typescript voor: Task<Hero> GetHero (int id) {...}
    getHero(id: number): Observable<Hero> {
      const hero = HEROES.find(x => x.id === id) as Hero;
      this.messagesService.addMessage(`HeroService: Fetched hero id: ${id}`);

      return of(hero);
    }

  getHeroes(): Observable<Hero[]>{
    // Make Http API call => Get array of heroes from specified URL
    const heroes = this.http.get<Hero[]>(this.heroesUrl);
    this.messagesService.addMessage('HeroService: Fetched heroes');
    return heroes;   
  }
}
