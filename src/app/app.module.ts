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
import { SafeMessagePipe } from './pipes/safe.pipe';
import {FormsModule} from "@angular/forms";
import { RiderNew3Component } from './components/riders/rider-new3/rider-new3.component';
import { RiderNew2Component } from './components/riders/rider-new2/rider-new2.component';
import { RiderNew1Component } from './components/riders/rider-new1/rider-new1.component';
import { ModalAlertComponent } from './components/utils/modal-alert/modal-alert.component';
import { RiderEventsTableComponent } from './components/riders/rider-detail/rider-events-table/rider-events-table.component';
import { EventsListTableComponent } from './components/events/events-list-table/events-list-table.component';
import { DropdownComponent } from './components/utils/dropdown/dropdown.component';
import { RegistrationsComponent } from './components/events/registrations/registrations.component';
import { ProgressbarComponent } from './components/utils/progressbar/progressbar.component';
import { EventAdminComponent } from './components/events/event-admin/event-admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRidersComponent } from './components/admin/admin-riders/admin-riders.component';
import { AdminEventsComponent } from './components/admin/admin-events/admin-events.component';
import { AdminClubsComponent } from './components/admin/admin-clubs/admin-clubs.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { SideNavComponent } from './components/admin/side-nav/side-nav.component';
import { RiderEditComponent } from './components/riders/rider-edit/rider-edit.component';

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
    SafeMessagePipe,
    RiderNew3Component,
    RiderNew2Component,
    RiderNew1Component,
    ModalAlertComponent,
    RiderEventsTableComponent,
    EventsListTableComponent,
    DropdownComponent,
    RegistrationsComponent,
    ProgressbarComponent,
    EventAdminComponent,
    LoginComponent,
    AdminComponent,
    AdminRidersComponent,
    AdminEventsComponent,
    AdminClubsComponent,
    DragDropDirective,
    SideNavComponent,
    RiderEditComponent,
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
