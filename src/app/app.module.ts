import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { MijnpipePipe } from './mijnpipe.pipe';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperpowersComponent } from './superpowers/superpowers.component';
import { SuperpowerDetailComponent } from './superpower-detail/superpower-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MijnpipePipe,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SuperpowersComponent,
    SuperpowerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
