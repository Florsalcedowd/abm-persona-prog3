import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaRactivaComponent } from './components/persona-reactiva/tabla-ractiva/tabla-ractiva.component';
import { TablaComponent } from './components/persona/tabla/tabla.component';

const routes: Routes = [
  {path: '', component: TablaComponent},
  {path: 'formReactivo', component: TablaRactivaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
