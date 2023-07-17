import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicSignalsComponent} from "./basic-signals/basic-signals.component";
import {AwesomeSignalsComponent} from "./awesome-signals.component";
import {BasicSignalsExtendedComponent} from "./basic-signals-extended/basic-signals-extended.component";
import {SignalsWithRxjsComponent} from "./signals-with-rxjs/signals-with-rxjs.component";

const routes: Routes = [
  {
    path: '',
    component: AwesomeSignalsComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:'basic-signals'
      },
      {
        path:'basic-signals',
        component: BasicSignalsComponent
      },
      {
        path:'basic-signals-extended',
        component: BasicSignalsExtendedComponent
      },
      {
        path:'signals-with-rxjs',
        component: SignalsWithRxjsComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwesomeSignalsRoutingModule { }
