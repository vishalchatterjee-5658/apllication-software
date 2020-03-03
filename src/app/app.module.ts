import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Routing
import {RouterModule,Routes} from '@angular/router';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    UserModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent, pathMatch: 'full'},
      {path: ' ',redirectTo: 'login', pathMatch: 'full'},
      {path:'*', component: LoginComponent},
      {path:'**',component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
