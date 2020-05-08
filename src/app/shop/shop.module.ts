import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CookieModule } from 'ngx-cookie';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './layout/home/home.component';
import { ListComponent } from './products/list/list.component';
import { FilterComponent } from './products/filter/filter.component';

@NgModule({
  declarations : [
    ShopComponent,
    HomeComponent,
    ListComponent,
    FilterComponent ],
  imports : [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  exports : [
    ShopComponent,
    HomeComponent
  ],
  bootstrap : [
    ShopComponent
  ]
})
export class ShopModule {
}
