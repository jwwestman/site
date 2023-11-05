import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmailComponent } from './email/email.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { CvsProjectsComponent } from './cvs-projects/cvs-projects.component';
import { AetnaProjectsComponent } from './aetna-projects/aetna-projects.component';
import { BofaProjectsComponent } from './bofa-projects/bofa-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    EmailComponent,
    FooterComponent,
    ResumeComponent,
    RecentProjectsComponent,
    CvsProjectsComponent,
    AetnaProjectsComponent,
    BofaProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
