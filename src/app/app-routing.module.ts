import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoDetailComponent } from './components/crypto-detail/crypto-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'crypto/:uuid', component: CryptoDetailComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
