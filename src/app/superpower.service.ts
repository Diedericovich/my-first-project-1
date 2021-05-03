import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import {SUPERPOWERS} from './mock-superpowers';
import { SuperPower } from './superpower';

@Injectable({
  providedIn: 'root'
})
export class SuperpowerService {



  getSuperPower(id: number): Observable<SuperPower> {

    const superPower = SUPERPOWERS.find(x => x.id === id) as SuperPower;
    this.messagesService.addMessage(`SuperpowerService: Fetched superpower id: ${id}`);
    
    return of(superPower);
  }

  constructor(private messagesService: MessagesService) { }

  getSuperPowers(): Observable<SuperPower[]>{
    const superPowers = of(SUPERPOWERS);
    this.messagesService.addMessage('SuperpowerService: Fetched superpowers');

return superPowers;
  }

}
