import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBCBComponent } from './Components/header-bcb/header-bcb.component';
import { HomeBodyBCBComponent } from './Components/home-body-bcb/home-body-bcb.component';
import { SignInBCBComponent } from './Components/sign-in-bcb/sign-in-bcb.component';
import { DocumentBCBComponent } from './Components/document-bcb/document-bcb.component';
import { AuthHomePageComponent } from './pages/auth-home-page/auth-home-page.component';
import { AdBannerComponent } from './Components/ad-banner/ad-banner.component';
import { MySolutionsComponent } from './Components/my-solutions/my-solutions.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeRateComponent } from './Components/exchange-rate/exchange-rate.component';
import { HistoryStatementComponent } from './Components/history-statement/history-statement.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { FooterBCBComponent } from './Components/footer-bcb/footer-bcb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBCBComponent,
    HomeBodyBCBComponent,
    SignInBCBComponent,
    DocumentBCBComponent,
    AuthHomePageComponent,
    AdBannerComponent,
    MySolutionsComponent,
    ExchangeRateComponent,
    HistoryStatementComponent,
    DocumentsComponent,
    FooterBCBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
