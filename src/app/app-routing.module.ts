import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyBCBComponent } from './Components/home-body-bcb/home-body-bcb.component';
import { SignInBCBComponent } from './Components/sign-in-bcb/sign-in-bcb.component';
import { DocumentBCBComponent } from './Components/document-bcb/document-bcb.component';
import { AuthHomePageComponent } from './pages/auth-home-page/auth-home-page.component';
import { DocumentsComponent } from './pages/documents/documents.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, 
  { path: 'welcome', component: HomeBodyBCBComponent },
  { path: 'home', component: AuthHomePageComponent },
  { path: 'document', component: DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
