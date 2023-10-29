import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmailComponent } from './email/email.component';
import { ResumeComponent } from './resume/resume.component';
import { HealthComponent } from './health/health.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { BankComponent } from './bank/bank.component';
import { RetailComponent } from './retail/retail.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'email', component: EmailComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'health', component: HealthComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'bank', component: BankComponent },
  { path: 'retail', component: RetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
