import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// import { DataModule } from './data/data.module';
import { FlexModule } from '@angular/flex-layout';
import { AuthGuard, ChildAuthGuard, LoginGuard } from './data/providers/guards.service';
import { JwtService } from './data/providers/jwt.service';
import { productService } from './data/providers/product.service';
import { UserService } from './data/providers/user.service';
import { AuthRepository } from './data/repositories/auth.repository';
import { ProductRespository } from './data/repositories/product.respository';
import { FooterComponent } from './shop/layout/footer/footer.component';
import { HeaderComponent } from './shop/layout/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './shop/layout/navigation/navigation.component';
import { NewsLetterComponent } from './shop/layout/news-letter/news-letter.component';
import { NgModule } from '@angular/core';
import { ShopModule } from './shop/shop.module';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations : [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NewsLetterComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports : [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    // DataModule,
    FlexModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    ShopModule,
    CookieModule.forRoot(),
    ReactiveFormsModule
  ],
  providers : [
    UserService,
    productService,
    AuthRepository,
    ProductRespository,
    JwtService,
    LoginGuard,
    AuthGuard,
    ChildAuthGuard
  ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}

// @Injectable()
// export class CustomBrowserXhr extends BrowserXhr {
//   constructor() {
//   }
//
//   build(): any {
//     let xhr = super.build();
//     xhr.withCredentials = true;
//     return <any> ( xhr );
//   }
// }
