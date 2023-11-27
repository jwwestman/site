import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmailComponent } from './email/email.component';
import { MessageSentComponent } from './message-sent/message-sent.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'recent-projects', component: RecentProjectsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'success', component: MessageSentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
