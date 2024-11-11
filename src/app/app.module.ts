import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}

// const firebaseConfig = {
//   apiKey: "AIzaSyD9DNqsz_hlGJBE3kWvAJOwrOdZ1RSNPVw",
//   authDomain: "angular-pro-app-e15d8.firebaseapp.com",
//   databaseURL: "https://angular-pro-app-e15d8-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "angular-pro-app-e15d8",
//   storageBucket: "angular-pro-app-e15d8.firebasestorage.app",
//   messagingSenderId: "1014566873392",
//   appId: "1:1014566873392:web:bf8a6a37e8037454c140f5",
//   measurementId: "G-QTKYVLDQ4P"
// };
