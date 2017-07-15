import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { McRAIIconModule } from '@mcrai/ui';

import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    McRAIIconModule
  ],
  declarations: [
    RootComponent,
    NavigationComponent
  ],
  exports: [
    RootComponent,
    NavigationComponent
  ]
})
export class HeaderModule { }
