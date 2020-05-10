import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginGuard } from './data/providers/guards.service';
import { CartComponent } from './shop/cart/cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { HomeComponent } from './shop/layout/home/home.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
// import { LoginComponent } from "./user/login/login.component";


const routes: Routes = [
  { path : '', component : HomeComponent, },
  { path : 'login', component : LoginComponent, pathMatch : 'full', canActivate : [ LoginGuard ] },
  { path : 'register', component : RegisterComponent, pathMatch : 'full', canActivate : [ LoginGuard ] },
  { path : 'shop', component : ShopComponent},
  { path : 'cart', component : CartComponent },
  { path : 'checkout', component : CheckoutComponent, canActivate : [ AuthGuard ] }

  // children : [?
  /*Lazy loading of other modules*/
  // {path: 'login', loadChildren: './components/dashboard/dashboard.module#DashboardModule'},
  // {path: 'devices', loadChildren: './components/devices/devices.module#DevicesModule'},
  // {path:'productcatalog',loadChildren:'./components/productcatalog/productcatalog.module#ProductcatalogModule'},
  // ]
  // }
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule {
}
