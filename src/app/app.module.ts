import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBCBComponent } from './Components/header-bcb/header-bcb.component';
import { HomeBodyBCBComponent } from './Components/home-body-bcb/home-body-bcb.component';
import { SignInBCBComponent } from './Components/sign-in-bcb/sign-in-bcb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBCBComponent,
    HomeBodyBCBComponent,
    SignInBCBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
