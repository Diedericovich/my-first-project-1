import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 

  constructor(private messagesService: MessagesService, private http: HttpClient) { }
    private heroesUrl = 'api/heroes';
    httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    // Typescript voor: Task<Hero> GetHero (int id) {...}
    getHero(id: number): Observable<Hero> {
      // Make Http API call => Get single heroe from specified URL
      const url = `${this.heroesUrl}/${id}`;
      const hero = this.http.get<Hero>(url);

      this.messagesService.addMessage(`HeroService: Fetched hero id: ${id}`);

      return hero;
    }

  getHeroes(): Observable<Hero[]>{
    // Make Http API call => Get array of heroes from specified URL
    const heroes = this.http.get<Hero[]>(this.heroesUrl);
    this.messagesService.addMessage('HeroService: Fetched heroes');
    return heroes;   
  }

  addHero(hero: Hero): Observable<Hero> {
    this.messagesService.addMessage(`HeroService: Add hero : ${hero.name}`);
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);
  }

  updateHero(hero: Hero| undefined): Observable<any> {
    this.messagesService.addMessage(`HeroService: Update hero : ${hero?.name}`);
    // Put => update existing data
    return this.http.put(this.heroesUrl, hero, this.httpOptions);
  }

  deleteHero(hero: Hero): Observable<Hero> {
    this.messagesService.addMessage(`HeroService: Delete hero : ${hero.name}`);
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete<Hero>(url, this.httpOptions);
  }
 
}
