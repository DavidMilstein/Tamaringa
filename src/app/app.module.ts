import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { DetectiveComponent } from './detective/detective.component';
import { CustomerSuggestionsComponent } from './customer/customer-suggestions/customer-suggestions.component';

// create routing
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'patient', component: CustomerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'detective', component: DetectiveComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AdminComponent,
    DetectiveComponent,
    CustomerSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
