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


  
  





}
