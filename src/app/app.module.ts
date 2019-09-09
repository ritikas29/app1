import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import {  AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './signin/signin.component';
import { TechComponent } from './tech/tech.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './food/content/content.component';
import { Content1Component } from './tech/content1/content1.component';
import { TravelComponent } from './travel/travel.component';
import { FormsModule } from '@angular/forms';
import { BloggingComponent } from './blogging/blogging.component';
import { AuthGuard } from './auth.service';
import { EmailComponent } from './email/email.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

export const firebaseConfig = {
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    TechComponent,
    FoodComponent,
    HomeComponent,
    LoginComponent,
    ContentComponent,
    Content1Component,
    TravelComponent,
    BloggingComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    HttpModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
