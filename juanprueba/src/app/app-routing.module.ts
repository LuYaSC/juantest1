import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirige la ruta raíz a page1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
