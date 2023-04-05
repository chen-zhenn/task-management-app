import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { FormComponent } from './components/form/form.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BurgerComponent } from './components/burger/burger.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { NavResourcesComponent } from './components/nav/nav-resources/nav-resources.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    FormComponent,
    SideBarComponent,
    HeaderComponent,
    BurgerComponent,
    ProfileComponent,
    AvatarComponent,
    UserComponent,
    HomeComponent,
    NavResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
