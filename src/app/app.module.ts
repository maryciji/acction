import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ComtentComponent} from './comtent/comtent.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StarsComponent} from './stars/stars.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StockFormComponent} from './stock/stock-form/stock-form.component';
import {ChartComponent} from './chart/chart.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashBoard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'stock/:id', component: StockFormComponent},
  {path: 'chart', component: ChartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ComtentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
