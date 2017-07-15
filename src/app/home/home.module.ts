import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { McRAIIconModule, McRAIButtonModule } from '@mcrai/ui';
import { BreakWordsPipe } from './pipes/break-words.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    McRAIIconModule,
    McRAIButtonModule,
    RouterModule
  ],
  declarations: [
    RootComponent,
    WelcomeComponent,
    BreakWordsPipe
  ],
  exports: [
    RootComponent
  ]
})
export class HomeModule { }
