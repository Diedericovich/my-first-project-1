import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from '../hero.service';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?:Hero;
  isImageVisible = true;

  clicked = 0;

constructor(
  private heroService: HeroService, 
  private messagesService: MessagesService) {
}

  
  ngOnInit(): void {
    this.getHeroes();
    
  }
  OnSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messagesService.addMessage(`HeroService: Clicked on: ${hero.id} ${hero.name}`);
  }

  // Get data async from dataserver
  // Subscribe => Wait until method has been completed, then perform action
  getHeroes(): void {
    // als je de methode hebt ingeladen, voer je de lijst locaal in (via subscribe) (in de UI)
    //best practice als je met database of API gaat werken
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x);
  }

  HandleClicked() {
    if (this.selectedHero) {
      if (this.clicked % 2 === 0) {
        this.selectedHero.imagePath = "http://placekitten.com/400/600"
        this.isImageVisible = true;
      }
      else {
        this.selectedHero.imagePath = "http://placekitten.com/600/400"
        this.isImageVisible = false;
      }
    }
    

    this.clicked++;
  }

}
