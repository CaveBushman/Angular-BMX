import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './components/clubs/clubs.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { EventsComponent } from './components/events/events.component';
import { HomepageComponent } from './components//homepage/homepage.component';
import { NewsComponent } from './components//news/news.component';
import { RankingsComponent } from './components//rankings/rankings.component';
import { RidersComponent } from './components//riders/riders.component';
import { RulesComponent } from './components/rules/rules.component';
import { RiderDetailComponent } from './components/riders/rider-detail/rider-detail.component';
import { RiderNewComponent } from './components/riders/rider-new/rider-new.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'riders', component: RidersComponent },
  { path: 'riders/:id', component: RiderDetailComponent },
  { path: 'riders-new', component: RiderNewComponent},
  { path: 'clubs', component: ClubsComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'rules', component: RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
