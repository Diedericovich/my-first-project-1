import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperPower } from '../superpower';
import { SuperpowerService } from '../superpower.service';

@Component({
  selector: 'app-superpower-detail',
  templateUrl: './superpower-detail.component.html',
  styleUrls: ['./superpower-detail.component.css']
})
export class SuperpowerDetailComponent implements OnInit {
  superpower: SuperPower | undefined;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private superpowerService: SuperpowerService
    ) { }

  ngOnInit(): void {
    this.getSuperPower();
  }

  getSuperPower(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.superpowerService.getSuperPower(id)
      .subscribe(x => this.superpower = x);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.superpowerService.updateSuperPower(this.superpower)
        .subscribe(() =>this.goBack())
  }



}
