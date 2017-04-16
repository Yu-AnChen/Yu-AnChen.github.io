import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProfolioComponent } from './profolio/profolio.component';

import { routing } from './app.routes';
import { ContactLinksComponent } from './contact-links/contact-links.component';
import { ProjectsComponent } from './projects/projects.component'


@NgModule({
  declarations: [
    AppComponent,
    ProfolioComponent,
    ContactLinksComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // NgbModule.forRoot()
  ],
  providers: [], // services
  bootstrap: [ AppComponent ]
})
export class AppModule { }
