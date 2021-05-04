import { Component, OnInit } from '@angular/core';
import { SuperPower} from '../superpower';
import { SuperpowerService} from '../superpower.service';
import { MessagesService} from '../messages.service';

@Component({
  selector: 'app-superpowers',
  templateUrl: './superpowers.component.html',
  styleUrls: ['./superpowers.component.css']
})
export class SuperpowersComponent implements OnInit {
  superPowers: SuperPower[] = [];
  selectedSuperPower?:SuperPower;
  newSuperpower: SuperPower = {
    name: "",
    type: "",
    isOverpowered: false
  }


  constructor(
    private superPowerService: SuperpowerService,
    private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    this.getSuperPowers();
  }
  getSuperPowers() {
    this.superPowerService.getSuperPowers()
        .subscribe(x => this.superPowers = x);
  }

  add(newSuperpower: SuperPower) {
   
    if (!newSuperpower) {return;}
    // dwz:'is uw string leeg, stop dan de methode en ga 1 niveau hoger'
    // nadien gewoon verder coderen zonder een niveau dieper te hoeven gaan
    this.superPowerService.addSuperPower(newSuperpower)
    .subscribe(x => this.superPowers.push(x));


    this.superPowerService.addSuperPower({ newSuperpower } as unknown as SuperPower)
        .subscribe(x => this.superPowers.push((x)));
  }

  deleteSuperPower(superPower: SuperPower) {
    if (!superPower) {return;}

    this.superPowerService.deleteSuperPower(superPower)
          .subscribe(() => this.superPowers = this.superPowers.filter(x => x != superPower));
  }

  
  





}
