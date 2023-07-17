import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { AwesomeSignalsRoutingModule } from './awesome-signals-routing.module';
import { BasicSignalsComponent } from './basic-signals/basic-signals.component';
import { AwesomeSignalsComponent } from './awesome-signals.component';
import { BasicSignalsExtendedComponent } from './basic-signals-extended/basic-signals-extended.component';
import { SignalsWithRxjsComponent } from './signals-with-rxjs/signals-with-rxjs.component';


@NgModule({
  declarations: [
    BasicSignalsComponent,
    AwesomeSignalsComponent,
    BasicSignalsExtendedComponent,
    SignalsWithRxjsComponent
  ],
    imports: [
        CommonModule,
        AwesomeSignalsRoutingModule,
        NgOptimizedImage
    ]
})
export class AwesomeSignalsModule { }
