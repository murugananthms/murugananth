import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UsersModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
