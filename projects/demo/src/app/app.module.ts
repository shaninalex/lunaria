import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LuButtonModule } from 'projects/lunaria/src/lib/components/lu-button/lu-button.module';
import { LuIconModule } from 'projects/lunaria/src/public-api';
import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
    declarations: [
        AppComponent,
        IconsComponent,
        ButtonsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LuButtonModule,
        LuIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
