import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CaruselComponent } from './components/homepage/carussel/carusel.component';
import { FooterComponent } from './components//homepage/footer/footer.component';
import { InstrumentsComponent } from './components//homepage/instruments/instruments.component';
import { MapComponent } from './components//homepage/map/map.component';
import { PartnersComponent } from './components//homepage/partners/partners.component';
import { RidersComponent } from './components//riders/riders.component';
import { EventsComponent } from './components/events/events.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { RankingsComponent } from './components//rankings/rankings.component';
import { RulesComponent } from './components/rules/rules.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { EventEntryComponent } from './components/events/event-entry/event-entry.component';
import { RiderDetailComponent } from './components//riders/rider-detail/rider-detail.component';
import { RiderNewComponent } from './components//riders/rider-new/rider-new.component';
import { ClubDetailComponent } from './components/clubs/club-detail/club-detail.component';
import { NavbarComponent } from './components//navbar/navbar.component';
import { NewsComponent } from './components//news/news.component';
import { NewsDetailComponent } from './components//news/news-detail/news-detail.component';
import { HomepageNewsComponent } from './components//homepage/homepage-news/homepage-news.component';
import { NewsPaginationsComponent } from './components//news/news-paginations/news-paginations.component';
import { HttpClientModule } from '@angular/common/http';
import { RidersAdminComponent } from './components/riders/riders-admin/riders-admin.component';
import { SafePipe } from './pipes/safe.pipe';
import {FormsModule} from "@angular/forms";

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
    NewsPaginationsComponent,
    RidersAdminComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
