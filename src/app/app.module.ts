import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import 'hammerjs';

import { MatTabsModule } from '@angular/material/tabs';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'tab1', pathMatch: 'full' },
  { path: 'tab1', component: Tab1Component },
  { path: 'tab2', component: Tab2Component },
  { path: 'tab3', component: Tab3Component }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, 
    Tab1Component, 
    Tab2Component,
    Tab3Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
