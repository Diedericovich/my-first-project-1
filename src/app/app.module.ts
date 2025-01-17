import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Provides communication between Angular and an API
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { MijnpipePipe } from './mijnpipe.pipe';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SuperpowerDetailComponent } from './superpower-detail/superpower-detail.component';
import { SuperpowersComponent } from './superpowers/superpowers.component';
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
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




