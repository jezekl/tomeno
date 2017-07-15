import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../slider/slider.module';
import { McRAIIconModule, McRAIButtonModule } from '@mcrai/ui';

import { RootComponent } from './components/root/root.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { OfferedServicesComponent } from './components/offered-services/offered-services.component';

@NgModule({
  imports: [
    CommonModule,
    SliderModule,
    McRAIIconModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent,
    GeneralInfoComponent,
    OfferedServicesComponent
  ],
  exports: [
    RootComponent
  ]
})
export class AboutMeModule { }
