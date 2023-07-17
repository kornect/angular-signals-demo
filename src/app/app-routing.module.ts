import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'awesome-signals'
  },
  {
    path:'awesome-signals',
    loadChildren: () => import('./awesome-signals/awesome-signals.module').then(m => m.AwesomeSignalsModule)
  },
  {
    path:'**',
    redirectTo:'awesome-signals'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
