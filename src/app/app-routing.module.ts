import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CvsComponent } from './cvs/cvs.component';
import { AetnaComponent } from './aetna/aetna.component';
import { BofaComponent } from './bofa/bofa.component';
import { FidelityComponent } from './fidelity/fidelity.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'cvs', component: CvsComponent },
  { path: 'aetna', component: AetnaComponent },
  { path: 'bofa', component: BofaComponent },
  { path: 'fidelity', component: FidelityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
