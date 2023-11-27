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
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { CvsProjectsComponent } from './cvs-projects/cvs-projects.component';
import { CvsDetails1Component } from './cvs-details1/cvs-details1.component';
import { AetnaProjectsComponent } from './aetna-projects/aetna-projects.component';
import { BofaProjectsComponent } from './bofa-projects/bofa-projects.component';
import { FidelityProjectsComponent } from './fidelity-projects/fidelity-projects.component';
import { MessageSentComponent } from './message-sent/message-sent.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { BofaDetails1Component } from './bofa-details1/bofa-details1.component';
import { FidoDetails1Component } from './fido-details1/fido-details1.component';
import { CvsDetails2Component } from './cvs-details2/cvs-details2.component';
import { AetnaDetails1Component } from './aetna-details1/aetna-details1.component';
import { AetnaDetails2Component } from './aetna-details2/aetna-details2.component';
import { IvestProjectsComponent } from './ivest-projects/ivest-projects.component';
import { BofaDetails2Component } from './bofa-details2/bofa-details2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    EmailComponent,
    FooterComponent,
    RecentProjectsComponent,
    AetnaProjectsComponent,
    BofaProjectsComponent,
    FidelityProjectsComponent,
    MessageSentComponent,
    CvsProjectsComponent,
    CvsDetails1Component,
    BofaDetails1Component,
    FidoDetails1Component,
    CvsDetails2Component,
    AetnaDetails1Component,
    AetnaDetails2Component,
    IvestProjectsComponent,
    BofaDetails2Component
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
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
