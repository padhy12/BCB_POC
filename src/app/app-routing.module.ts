import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyBCBComponent } from './Components/home-body-bcb/home-body-bcb.component';
import { SignInBCBComponent } from './Components/sign-in-bcb/sign-in-bcb.component';
import { DocumentBCBComponent } from './Components/document-bcb/document-bcb.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeBodyBCBComponent },
  { path: 'signin', component: SignInBCBComponent },
  { path: 'document', component: DocumentBCBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
