import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, PlaygroundComponent]
})
export class TrunkModule { }
