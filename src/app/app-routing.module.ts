import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyBCBComponent } from './Components/home-body-bcb/home-body-bcb.component';
import { SignInBCBComponent } from './Components/sign-in-bcb/sign-in-bcb.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '', component: HomeBodyBCBComponent },
  { path: 'signin', component: SignInBCBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
