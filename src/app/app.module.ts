import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CaruselComponent } from './homepage/carussel/carusel.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { InstrumentsComponent } from './homepage/instruments/instruments.component';
import { MapComponent } from './homepage/map/map.component';
import { PartnersComponent } from './homepage/partners/partners.component';
import { RidersComponent } from './riders/riders.component';
import { EventsComponent } from './events/events.component';
import { ClubsComponent } from './clubs/clubs.component';
import { RankingsComponent } from './rankings/rankings.component';
import { RulesComponent } from './rules/rules.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEntryComponent } from './events/event-entry/event-entry.component';
import { RiderDetailComponent } from './riders/rider-detail/rider-detail.component';
import { RiderNewComponent } from './riders/rider-new/rider-new.component';
import { ClubDetailComponent } from './clubs/club-detail/club-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { HomepageNewsComponent } from './homepage/homepage-news/homepage-news.component';
import { NewsPaginationsComponent } from './news/news-paginations/news-paginations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CaruselComponent,
    FooterComponent,
    InstrumentsComponent,
    MapComponent,
    PartnersComponent,
    RidersComponent,
    EventsComponent,
    ClubsComponent,
    RankingsComponent,
    RulesComponent,
    DownloadsComponent,
    EventDetailComponent,
    EventEntryComponent,
    RiderDetailComponent,
    RiderNewComponent,
    ClubDetailComponent,
    NavbarComponent,
    NewsComponent,
    NewsDetailComponent,
    HomepageNewsComponent,
    NewsPaginationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
