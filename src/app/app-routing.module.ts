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
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';
import { ClubDetailComponent } from './components/clubs/club-detail/club-detail.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { RidersAdminComponent } from './components/riders/riders-admin/riders-admin.component';
import { RiderNew3Component } from './components/riders/rider-new3/rider-new3.component';
import { RegistrationsComponent } from './components/events/registrations/registrations.component';
import { EventAdminComponent } from './components/events/event-admin/event-admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { RiderEditComponent } from './components/riders/rider-edit/rider-edit.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'events', component: EventsComponent },
  { path: `events/:id`, component: EventDetailComponent },
  { path: 'events/entry/:id', component: RegistrationsComponent },
  {path: `admin`, component: AdminComponent, canActivate: [AuthGuard], data: {roles: ['admin']}},
  {
    path: `events/admin/:id`,
    component: EventAdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  { path: 'riders', component: RidersComponent },
  { path: 'riders/:id', component: RiderDetailComponent },
  { path: 'rider-new', component: RiderNewComponent },
  { path: `rider-new-3`, component: RiderNew3Component },
  { path: `riders-admin`, component: RidersAdminComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: `clubs/:id`, component: ClubDetailComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'news', component: NewsComponent },
  { path: `news/:id`, component: NewsDetailComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rider-edit/:id', component: RiderEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
