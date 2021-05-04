import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { SuperPower } from './superpower';

@Injectable({
  providedIn: 'root'
})
export class SuperpowerService {



 

  constructor(private messagesService: MessagesService, private http: HttpClient) { }
  private superpowerUrl = 'api/superpowers';

  getSuperPower(id: number): Observable<SuperPower> {

    const url = `${this.superpowerUrl}/${id}`;
    const superpower = this.http.get<SuperPower>(url);
    this.messagesService.addMessage(`SuperpowerService: Fetched superpower id: ${id}`);
    
    return superpower;
  }


  getSuperPowers(): Observable<SuperPower[]>{
    const superpowers = this.http.get<SuperPower[]>(this.superpowerUrl);
    this.messagesService.addMessage('SuperpowerService: Fetched superpowers');

return superpowers;
  }

}
