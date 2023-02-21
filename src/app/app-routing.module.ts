import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantLoginComponent } from './components/restaurant-login/restaurant-login.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'loginpage',component:LoginPageComponent ,pathMatch:'full'},
  {path:'restaurantpage',component:RestaurantLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
