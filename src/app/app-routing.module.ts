import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { EventsComponent } from './events/events.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { RankingsComponent } from './rankings/rankings.component';
import { RidersComponent } from './riders/riders.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'riders', component: RidersComponent },
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
