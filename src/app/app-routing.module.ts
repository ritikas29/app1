import { ContentComponent } from './food/content/content.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { TechComponent } from './tech/tech.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'signin', component: SigninComponent},
  { path: 'login', component: LoginComponent},
  { path: 'food', component: FoodComponent },
  { path: 'tech', component: TechComponent},
  {path: 'home', component: HomeComponent},
  {path: 'content', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
