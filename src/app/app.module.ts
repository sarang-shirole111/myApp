import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './component/about/about.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ErrorComponent } from './component/error/error.component';
import { AccountsComponent } from './component/accounts/accounts.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { SettingsComponent } from './component/settings/settings.component';
import { HelpComponent } from './component/help/help.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    ErrorComponent,
    AccountsComponent,
    ContactsComponent,
    SettingsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
