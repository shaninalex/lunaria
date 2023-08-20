import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
    { path: 'icons', component: IconsComponent },
    { path: 'buttons', component: ButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
