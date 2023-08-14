import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from '../../../lunaria/src/lib/components/alert/alert.module';
import { LuButtonModule } from 'projects/lunaria/src/lib/components/lu-button/lu-button.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    LuButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
