import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ComponenteHijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ComponenteHijoComponent
  ]
})
export class ComponentsModule { }
