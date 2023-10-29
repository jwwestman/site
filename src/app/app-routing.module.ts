import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmailComponent } from './email/email.component';
import { ResumeComponent } from './resume/resume.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'email', component: EmailComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'health', component: HealthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
