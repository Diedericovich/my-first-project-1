import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

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

  addSuperPower(superpower: SuperPower): Observable<SuperPower> {
    this.messagesService.addMessage(`SuperpowerService: Add Superpower : ${superpower.name}`);
    return this.http.post<SuperPower>(this.superpowerUrl, superpower, this.httpOptions);
  }

  updateSuperPower(superpower: SuperPower| undefined): Observable<any> {
    this.messagesService.addMessage(`SuperpowerService: Update Superpower : ${superpower?.name}`);
    // Put => update existing data
    return this.http.put(this.superpowerUrl, superpower, this.httpOptions);
  }

  deleteSuperPower(superpower: SuperPower): Observable<SuperPower> {
    this.messagesService.addMessage(`SuperpowerService: Delete Superpower : ${superpower.name}`);
    const url = `${this.superpowerUrl}/${superpower.id}`;
    return this.http.delete<SuperPower>(url, this.httpOptions);
  }

}
